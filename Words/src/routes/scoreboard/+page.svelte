<script lang="ts">
	import { onMount } from 'svelte';
	import { supabaseClient } from '$lib/supabase';
	import type { IScore } from '$lib/types';
	import { goto } from '$app/navigation';

	let scores: IScore[] = [];

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

	onMount(async () => {
		const { data, error } = await supabaseClient
			.from<IScore>('scores')
			.select('*')
			.order('score', { ascending: true });

		if (error) console.log('Error:', error);
		else scores = data;
	});

	function formatDuration(score: number): string {
		const hours = Math.floor(score / 3600);
		const minutes = Math.floor((score % 3600) / 60);
		const seconds = Math.floor(score % 60);
		const milliseconds = Math.floor((score % 1) * 1000);
		const nanoseconds = Math.floor(((score % 1) * 1000000) % 1000) * 1000;

		return `${hours}h ${minutes}m ${seconds}s ${milliseconds}ms ${nanoseconds}ns`;
	}
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
			<button on:click={() => goto('/main')}>Back</button>
			{#if user}
				<button on:click={() => logoutUser()}>Logout</button>
			{:else}
				<button on:click={() => goto('/login')}>Login</button>
			{/if}
		</nav>
	</header>
	<table>
		<thead>
			<tr>
				<th>Rank</th>
				<th>Player</th>
				<th>Score</th>
			</tr>
		</thead>
		<tbody>
			{#each scores as score, index (score.id)}
				<tr>
					<td>{index + 1}</td>
					<td>{score.username}</td>
					<td>{formatDuration(score.score)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
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
