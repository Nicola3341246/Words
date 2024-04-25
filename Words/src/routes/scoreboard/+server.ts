import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { IScore } from '$lib/types';
import { supabaseClient } from '$lib/supabase';

export const POST: RequestHandler = async ({ request }) => {
	const score: IScore = await request.json();
    console.log(score);
    const { error } = await supabaseClient
        .from("scores")
        .insert({ id: score.id, score: score.score, username: score.username, user_uuid: score.user_uuid });

    if (error) {
        return json({ error: error.message }, { status: 500 });
    };

    return json({ message: "Score added successfully" });
}