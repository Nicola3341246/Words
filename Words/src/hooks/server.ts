import "$lib/supabase"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event)

	event.locals.sb = supabaseClient;
	event.locals.session = session;

	return resolve(event)
}
