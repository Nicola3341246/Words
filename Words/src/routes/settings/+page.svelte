<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '../../components/Header.svelte';

	let darkMode = false;
	let language = 'english';

	onMount(() => {
		if (typeof window !== 'undefined') {
			darkMode = localStorage.getItem('darkMode') === 'true';
			language = localStorage.getItem('language') || 'english';
		}
	});

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
	<Header />
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

	select {
		padding: 10px;
		font-size: 16px;
		border-radius: 5px;
		border: 1px solid #ccc;
	}
</style>
