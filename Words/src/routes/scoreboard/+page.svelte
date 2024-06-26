<script lang="ts">
	import { onMount } from 'svelte';
	import { supabaseClient } from '$lib/supabase';
	import type { IScore } from '$lib/types';
	import Header from '../../components/Header.svelte';
	let scores: IScore[] = [];

	let darkMode = false;

	if (typeof window !== 'undefined') {
		darkMode = localStorage.getItem('darkMode') === 'true';
		if (darkMode) {
			document.body.style.backgroundColor = '#333';
		} else {
			document.body.style.backgroundColor = 'white';
		}
	}

	onMount(async () => {
		const { data, error } = await supabaseClient
			.from<string, IScore>('scores')
			.select('*')
			.order('score', { ascending: true });

		if (error) alert("Couldn't fetch scores");
		else scores = data as IScore[];
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
	<Header />
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
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.dark {
		background-color: #333;
	}

	table {
		width: 80%;
		max-width: 600px;
		border-collapse: collapse;
		margin: 20px 0;
		font-size: 0.9em;
		min-width: 300px;
	}

	th,
	td {
		border: 1px solid #ddd;
		padding: 8px 12px;
		text-align: left;
	}

	th {
		background-color: #04aa6d;
		color: white;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	.dark tr:nth-child(even) {
		background-color: #585858;
	}

	.dark td {
		color: #ddd;
	}
</style>
