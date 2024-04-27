<script lang="ts">
	import { supabaseClient } from '$lib/supabase';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import Header from '../components/Header.svelte';

	export let data: any;
	let darkMode = false;

	if (typeof window !== 'undefined') {
		darkMode = localStorage.getItem('darkMode') === 'true';
	}

	supabaseClient.auth.getSession().then((session) => {
		data = session.data;

		if (browser && data.session !== null) {
			goto('/main');
		}
	});
</script>

<main class:dark={darkMode}>
	<Header />
	{#if data.session == null}
		<div>
			<h1>Wordle</h1>
			<section>Play now!</section>
			<div>
				<button on:click={() => goto('/login')}>Start Playing</button>
			</div>
		</div>
	{:else}
		<header>Wordle</header>
		<div>
			<h1>Something has gone wrong</h1>
		</div>
	{/if}
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
