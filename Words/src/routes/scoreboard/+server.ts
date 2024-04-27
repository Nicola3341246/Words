import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { IScore } from '$lib/types';
import { supabaseClient } from '$lib/supabase';

export const POST: RequestHandler = async ({ request }) => {
    const score: IScore = await request.json();
    const { data } = await supabaseClient.from<string, IScore | null>("scores").select("*").eq("id", score.id).single();
    if (data) {
        const existingScore: IScore = data as IScore;
        if (existingScore.score >= score.score) {
            await supabaseClient.from("scores").delete().eq("id", score.id);
        }
        if (existingScore.score <= score.score) {
            return json({ message: "Score not added, because the existing score is higher" }, { status: 200 })
        }
    } 
    const { error: insertError } = await supabaseClient
        .from("scores")
        .insert({ id: score.id, score: score.score, username: score.username, user_uuid: score.user_uuid });

    if (insertError) {
        return json({ error: insertError.message }, { status: 500 });
    }

    return json({ message: "Score added successfully" });
}