import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';
import type { Handle } from '@sveltejs/kit';

export const supabaseClient = createClient(
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY,
)

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.sb = supabaseClient;

  event.locals.getSession = async () => {
    const {
      data: { session }
    } = await event.locals.sb.auth.getSession();
    return session;
  };

  return resolve(event, {
    filterSerializedResponseHeaders(name: string) {
      return name === 'content-range';
    }
  });
};

