<script lang="ts">
	import { browser } from '$app/environment';
	import type { wordGuess, letterGuess } from '$lib';

	let word: string = '';
	let guessList: wordGuess[] = [];
	let startTime: Date = new Date();

	const getWord = async () => {
		const response = await fetch('/api/wordlist', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});
		word = await response.text();
	};

	const resetGame = () => {
		getWord();
		guessList = [];
		startTime = new Date();
	};

	function correctWord(wordToGuess: string, guessedWord: string): wordGuess {
		const wordGuess: wordGuess = { letters: [] };

		const letterFrequency: Map<string, number> = new Map();
		for (const letter of wordToGuess) {
			letterFrequency.set(letter, (letterFrequency.get(letter) || 0) + 1);
		}

		for (let i = 0; i < guessedWord.length; i++) {
			const guessedLetter = guessedWord[i];
			const actualLetter = wordToGuess[i];

			// Check if letter exists
			if (wordToGuess.includes(guessedLetter)) {
				if (guessedLetter === actualLetter) {
					wordGuess.letters.push({ id: i, letter: guessedLetter, status: 'correct' });
				} else {
					wordGuess.letters.push({ id: i, letter: guessedLetter, status: 'exists' });
				}
			} else {
				wordGuess.letters.push({ id: i, letter: guessedLetter, status: 'wrong' });
			}

			if (letterFrequency.has(actualLetter)) {
				letterFrequency.set(actualLetter, letterFrequency.get(actualLetter)! - 1);
			}
		}

		for (const [letter, frequency] of letterFrequency) {
			if (frequency > 0) {
				const index = wordToGuess.indexOf(letter);
				wordGuess.letters.push({ id: index, letter, status: 'wrong' });
			}
		}

		wordGuess.letters.sort((a: any, b: any) => a.id - b.id);

		return wordGuess;
	}

	const getElapsedTimeInMiliseconds = () => {
		const endTime = new Date();
		return endTime.getTime() - startTime.getTime();
	};

	const checkGuess = async (event: { currentTarget: EventTarget & HTMLFormElement }) => {
		if (word === '') return;

		const formData = new FormData(event.currentTarget);

		// Format input
		let stringGuess = '';

		let formaterIndex = 0;
		for (let field of formData) {
			const [key, value] = field;
			stringGuess += value.toString().toLowerCase();
			formaterIndex++;
		}
		if (stringGuess.length !== 5) return;

		const correctedWord = correctWord(word, stringGuess);

		// clear inputs
		const inputContainer = event.currentTarget.querySelector('.inputContainer') as Element;
		const inputs = inputContainer.querySelectorAll('input');
		inputs.forEach((input) => (input.value = ''));

		// update Gui
		guessList.push(correctedWord);
		guessList = guessList;

		// Check for win
		let correctLetters = 0;
		correctedWord.letters.forEach((letter) => {
			if (letter.status === 'correct') correctLetters++;
		});

		if (correctLetters === 5) {
			const elapsedTime = getElapsedTimeInMiliseconds() / 1000;

			alert(
				'You won!\nThe word was: ' +
					word +
					'\nAmount of Guesses: ' +
					guessList.length +
					'\nUsed time: ' +
					elapsedTime +
					' seconds'
			);

			resetGame();
			return;
		}
	};

	if (browser) {
		resetGame();
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