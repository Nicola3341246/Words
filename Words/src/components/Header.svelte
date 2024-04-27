<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';

	const logoutUser = async () => {
		await supabaseClient.auth.signOut();
		getUser();
		goto('/');
	};

	export let user: any = null;
	const getUser = async () => {
		const { data, error } = await supabaseClient.auth.getUser();
		if (error) {
			user = null;
			return;
		}

		user = data;
	};
	getUser();

	let currentRoute = '';

	onMount(() => {
		currentRoute = window.location.pathname;
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
		{#if currentRoute != '/settings'}
			<button on:click={() => goto('/settings')}>Settings</button>
		{/if}
		{#if currentRoute != 'settings'}
			<button on:click={() => goto('/settings')}>Settings</button>
		{/if}
		{#if currentRoute != '/main'}
			<button on:click={() => goto('/Back')}>Start Playing</button>
		{/if}
		{#if user}
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
