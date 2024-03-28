<script lang="ts">
	const getWord = async () => {
		const response = await fetch('/api/wordlist', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});
		console.log(await response.text());
	};
</script>

<button on:click={() => getWord()}>Press</button>
