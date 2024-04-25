<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';

	let darkMode = false;

	if (typeof window !== 'undefined') {
		darkMode = localStorage.getItem('darkMode') === 'true';
	}

	export let user: any;
	const getUser = async () => {
		const { data, error } = await supabaseClient.auth.getUser();
		if (error) {
			user = null;
			return;
		}

		user = data;
	};
	getUser();

	const logoutUser = async () => {
		await supabaseClient.auth.signOut();
		getUser();
		goto('/');
	};
</script>

<main class:dark={darkMode}>
	<header>
		{#if user}
			<section>Welcome, {user.user.user_metadata.name}</section>
		{:else}
			<section>Welcome, Guest</section>
		{/if}
		<nav>
			<button on:click={() => goto('/offlineGame')}>Start Playing</button>
			<button on:click={() => goto('/scoreboard')}>Scoreboard</button>
			{#if user}
				<button on:click={() => logoutUser()}>Logout</button>
			{:else}
				<button class="HeaderButton" on:click={() => goto('/login')}>Login</button>
			{/if}
		</nav>
	</header>
	<div>
		<h1>Wordle</h1>
		<button on:click={() => goto('/offlineGame')}>Start Playing</button>
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family: Arial, sans-serif;
	}

	main {
		text-align: center;
		padding: 20px;
		height: 100vh;
	}

	.dark {
		background-color: #333;
		color: white;
	}

	header {
		padding: 10px 0;
		font-size: 24px;
	}

	button {
		padding: 10px 20px;
		margin-top: 10px;
		cursor: pointer;
		background-color: #12e80b;
		border: none;
		border-radius: 5px;
		color: white;
		font-size: 16px;
	}

	button:hover {
		background-color: #18ed11;
	}
</style>
