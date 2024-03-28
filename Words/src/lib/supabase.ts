import { createClient } from '@supabase/supabase-js';
import type { Handle } from '@sveltejs/kit';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'

export const supabaseClient = createClient(
	PUBLIC_SUPABASE_URL as string,
  PUBLIC_SUPABASE_ANON_KEY as string
);

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

