declare global {
	namespace App {
		declare module '$env/static/public' {
			export const PUBLIC_SUPABASE_ANON_KEY: string;
			export const PUBLIC_SUPABASE_URL: string;
		}
		interface event {
			locals: Locals
		}
		interface Locals {
			sb: TypedSupabaseClient
			session: Session | null
			getSession: () => Promise<Session | null>
		}
		interface PageData {
			session: import("@supabase/supabase-js").Session | null
		}
	}
}

export {};