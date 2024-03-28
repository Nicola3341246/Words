<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import type { Provider } from '@supabase/supabase-js';
	import type { SubmitFunction } from '@sveltejs/kit';

	export let sessionData: any;

	supabaseClient.auth.getSession().then((session) => {
		sessionData = session.data;

		if (browser && sessionData.session !== null) {
			goto('/mainpage');
		}
	});

	const signInWithProvider = async (provider: Provider) => {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({
			provider: provider
		});
	};

	const submitSocialLogin: SubmitFunction = async ({ action, cancel }) => {
		switch (action.searchParams.get('provider')) {
			case 'github':
				await signInWithProvider('github');
				break;
			default:
				break;
		}
		cancel();
	};
</script>

<main class="Container">
	<div class="ContentContainer">
		<h1 class="Title">Login</h1>
		<form method="POST" use:enhance={submitSocialLogin}>
			<button type="submit" formaction="?/login&provider=github" class="btn btn-ghost Button">
				Login with GitHub
			</button>
		</form>
	</div>
</main>
