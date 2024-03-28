<script lang="ts">
	import { browser } from '$app/environment';
	import type { wordGuess, letterGuess } from '$lib';
	let word: string = '';
	let guessList: wordGuess[] = [];

	const getWord = async () => {
		const response = await fetch('/api/wordlist', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});
		word = await response.text();
	};

	const returnWordGuess = (id: number, letter: string, status: string): letterGuess => {
		const newletter: letterGuess = {
			id: id,
			letter: letter,
			status: status
		};
		return newletter;
	};

	const checkGuess = async (event: { currentTarget: EventTarget & HTMLFormElement }) => {
		if (word === '') return;

		const formData = new FormData(event.currentTarget);
		const newGuess: wordGuess = {
			letters: []
		};

		let index = 0;
		for (let field of formData) {
			const [key, value] = field;
			newGuess.letters.push(returnWordGuess(index, value.toString(), 'correct'));
			index++;
		}

		console.log(newGuess);

		guessList.push(newGuess);
		guessList = guessList;
	};

	if (browser) {
		getWord();
	}
</script>

<div>
	<div>
		{#if word === ''}
			<div>No</div>
		{:else}
			{#each guessList as guess}
				<div class="">
					<section>{guess.letters[0].letter}</section>
					<section>{guess.letters[1].letter}</section>
					<section>{guess.letters[2].letter}</section>
					<section>{guess.letters[3].letter}</section>
					<section>{guess.letters[4].letter}</section>
				</div>
			{/each}
			<form action="?/checkGuess" method="post" on:submit|preventDefault={checkGuess}>
				<div>
					<input id="input1" name="input" minlength="1" maxlength="1" />
					<input id="input2" name="input" minlength="1" maxlength="1" />
					<input id="input3" name="input" minlength="1" maxlength="1" />
					<input id="input4" name="input" minlength="1" maxlength="1" />
					<input id="input5" name="input" minlength="1" maxlength="1" />
				</div>
				<button>checkGuess</button>
			</form>
		{/if}
	</div>
</div>
