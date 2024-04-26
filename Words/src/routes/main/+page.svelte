<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import Header from '../../components/Header.svelte';
	
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
		console.log(data);
	};
	getUser();
</script>

<main class:dark={darkMode}>
	<Header />
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
