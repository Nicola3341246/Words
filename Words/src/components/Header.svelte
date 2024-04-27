<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';

	const logoutUser = async () => {
		await supabaseClient.auth.signOut();
		getUser();
		goto('/');
	};

	const getUser = async () => {
		const { data, error } = await supabaseClient.auth.getUser();
		if (error) {
			return null;
		}
		user = data;
	};

	let user: any = null;
	let currentRoute = '';

	onMount(() => {
		currentRoute = window.location.pathname;
		getUser();
	});
</script>

<header>
	<nav>
		{#if currentRoute != '/offlineGame'}
			<button on:click={() => goto('/offlineGame')}>Start Playing</button>
		{/if}
		{#if currentRoute != '/scoreboard'}
			<button on:click={() => goto('/scoreboard')}>Scoreboard</button>
		{/if}
		{#if currentRoute != 'settings'}
			<button on:click={() => goto('/settings')}>Settings</button>
		{/if}
		{#if currentRoute != '/main'}
			<button on:click={() => goto('/Back')}>back</button>
		{/if}
		{#if user !== null}
			<button on:click={() => logoutUser()}>Logout</button>
		{:else}
			<button class="HeaderButton" on:click={() => goto('/login')}>Login</button>
		{/if}
	</nav>
</header>

<style>
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
