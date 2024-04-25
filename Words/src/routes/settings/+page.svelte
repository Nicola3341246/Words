<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';

	let darkMode = false;
	let language = 'english';

	onMount(() => {
		if (typeof window !== 'undefined') {
			darkMode = localStorage.getItem('darkMode') === 'true';
			language = localStorage.getItem('language') || 'english';
		}
	});

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

	function toggleDarkMode() {
		darkMode = !darkMode;
		localStorage.setItem('darkMode', darkMode.toString());
	}

	function setLanguage(lang: string) {
		language = lang;
		localStorage.setItem('language', lang);
	}
</script>

<main class:dark={darkMode}>
	<header>
		<section>Settings</section>
		<nav>
			<button on:click={() => goto('/offlineGame')}>Start Playing</button>
			<button on:click={() => goto('/scoreboard')}>Scoreboard</button>
			<button on:click={() => goto('/')}>Back</button>
			{#if user}
				<button on:click={() => logoutUser()}>Logout</button>
			{:else}
				<button class="HeaderButton" on:click={() => goto('/login')}>Login</button>
			{/if}
		</nav>
	</header>
	<select on:change={(e) => setLanguage(e.target.value)}>
		<option value="english" selected={language === 'english'}>English</option>
		<option value="german" selected={language === 'german'}>German</option>
	</select>
	<button on:click={toggleDarkMode}>Toggle Dark Mode</button>
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
