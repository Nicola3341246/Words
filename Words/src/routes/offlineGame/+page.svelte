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

	function correctWord(wordToGuess: string, guessedWord: string): wordGuess {
		const wordGuess: wordGuess = { letters: [] };

		// Create a map to store the frequency of letters in the word to guess
		const letterFrequency: Map<string, number> = new Map();
		for (const letter of wordToGuess) {
			letterFrequency.set(letter, (letterFrequency.get(letter) || 0) + 1);
		}

		// Iterate through each letter in the guessed word
		for (let i = 0; i < guessedWord.length; i++) {
			const guessedLetter = guessedWord[i];
			const actualLetter = wordToGuess[i];

			// Check if the guessed letter exists in the word to guess
			if (wordToGuess.includes(guessedLetter)) {
				// If the guessed letter is in the correct position
				if (guessedLetter === actualLetter) {
					wordGuess.letters.push({ id: i, letter: guessedLetter, status: 'correct' });
				} else {
					// If the guessed letter exists but is not in the correct position
					wordGuess.letters.push({ id: i, letter: guessedLetter, status: 'exists' });
				}
			} else {
				// If the guessed letter does not exist in the word to guess
				wordGuess.letters.push({ id: i, letter: guessedLetter, status: 'wrong' });
			}

			// Update the frequency of the actual letter
			if (letterFrequency.has(actualLetter)) {
				letterFrequency.set(actualLetter, letterFrequency.get(actualLetter)! - 1);
			}
		}

		// Check for letters in the word to guess that were not guessed
		for (const [letter, frequency] of letterFrequency) {
			if (frequency > 0) {
				const index = wordToGuess.indexOf(letter);
				wordGuess.letters.push({ id: index, letter, status: 'wrong' });
			}
		}

		// Sort the letter guesses based on their ID
		wordGuess.letters.sort((a: any, b: any) => a.id - b.id);

		return wordGuess;
	}

	const checkGuess = async (event: { currentTarget: EventTarget & HTMLFormElement }) => {
		if (word === '') return;

		const formData = new FormData(event.currentTarget);
		let stringGuess = '';

		let formaterIndex = 0;
		for (let field of formData) {
			const [key, value] = field;
			stringGuess += value.toString().toLowerCase();
			formaterIndex++;
		}
		if (stringGuess.length !== 5) return;

		// check if guess is correct
		const correctedWord = correctWord(word, stringGuess);
		console.log(correctedWord.letters);

		// clear inputs
		const inputContainer = event.currentTarget.querySelector('.inputContainer') as Element;
		const inputs = inputContainer.querySelectorAll('input');
		inputs.forEach((input) => (input.value = ''));

		// update Gui
		guessList.push(correctedWord);
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
				<div class="oldGuess">
					<div class="oldGuessLetter {guess.letters[0].status}">
						{guess.letters[0].letter}
					</div>
					<div class="oldGuessLetter {guess.letters[1].status}">
						{guess.letters[1].letter}
					</div>
					<div class="oldGuessLetter {guess.letters[2].status}">
						{guess.letters[2].letter}
					</div>
					<div class="oldGuessLetter {guess.letters[3].status}">
						{guess.letters[3].letter}
					</div>
					<div class="oldGuessLetter {guess.letters[4].status}">
						{guess.letters[4].letter}
					</div>
				</div>
			{/each}
			<form action="?/checkGuess" method="post" on:submit|preventDefault={checkGuess}>
				<div class="inputContainer">
					<input class="wordinput" id="input1" name="input" minlength="1" maxlength="1" />
					<input class="wordinput" id="input2" name="input" minlength="1" maxlength="1" />
					<input class="wordinput" id="input3" name="input" minlength="1" maxlength="1" />
					<input class="wordinput" id="input4" name="input" minlength="1" maxlength="1" />
					<input class="wordinput" id="input5" name="input" minlength="1" maxlength="1" />
				</div>
				<button class="submitButton">checkGuess</button>
			</form>
		{/if}
	</div>
</div>

<style>
	.oldGuess {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.oldGuessLetter {
		width: 50px;
		height: 50px;
		font-size: 30px;
		text-align: center;
	}

	.wrong {
		background-color: red;
	}

	.correct {
		background-color: green;
	}

	.exists {
		background-color: yellow;
	}

	.inputContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.wordinput {
		width: 50px;
		height: 50px;
		font-size: 30px;
		text-align: center;
	}

	.submitButton {
		width: 150px;
		height: 50px;
		font-size: 20px;
	}
</style>
