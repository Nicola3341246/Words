<script lang="ts">
	import { onMount } from 'svelte';
	import { supabaseClient } from '$lib/supabase';
	import type { IScore } from '$lib/types';

	let scores: IScore[] = [];

	onMount(async () => {
		const { data, error } = await supabaseClient
			.from<IScore>('scores')
			.select('*')
			.order('score', { ascending: false });

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

<table>
	<thead>
		<tr>
			<th>Player</th>
			<th>Score</th>
		</tr>
	</thead>
	<tbody>
		{#each scores as score (score.id)}
			<tr>
				<td>{score.username}</td>
				<td>{formatDuration(score.score)}</td>
			</tr>
		{/each}
	</tbody>
</table>
