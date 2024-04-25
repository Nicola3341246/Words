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
</script>

<table>
	<thead>
		<tr>
			<th>Player</th>
			<th>Score</th>
		</tr>
	</thead>
	<tbody> </tbody><tbody>
		{#each scores as score (score.id)}
			<tr>
				<td>{score.username}</td>
				<td>{score.score}</td>
			</tr>
		{/each}
	</tbody>
</table>
