<script lang="ts">
	import { browser } from '$app/environment';
	import type { wordGuess } from '$lib';
	import { onMount, afterUpdate } from 'svelte';
	import Header from '../../components/Header.svelte';
	import { supabaseClient } from '$lib/supabase';
	import type { IScore } from '$lib/types';

	let word: string = '';
	let guessList: wordGuess[] = [];
	let startTime: Date = new Date();
	const language = (localStorage.getItem('language') as string) || 'english';
	let wordInputs: HTMLInputElement[] = [];

	let darkMode = false;

	onMount(() => {
		if (typeof window !== 'undefined') {
			darkMode = localStorage.getItem('darkMode') === 'true';
			if (darkMode) {
				document.body.style.backgroundColor = '#333';
			} else {
				document.body.style.backgroundColor = 'white';
			}
		}

		if (browser) {
			resetGame();
		}
	});

	afterUpdate(() => {
		focusOnInput(0);
	});

	const getWordList = async (language: string) => {
		const response = await fetch(`/api/words/${language}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});
		word = await response.text();
	};

	getWordList(language);

	const resetGame = () => {
		getWordList(language);
		guessList = [];
		startTime = new Date(Date.now());
	};

	const focusOnInput = (inputId: number) => {
		if (wordInputs[inputId]) {
			wordInputs[inputId].focus();
		}
	};

	const handleInputFocus = (event: KeyboardEvent) => {
		const input = event.target as HTMLInputElement;
		const nextInput = input.nextElementSibling as HTMLInputElement;
		const prevInput = input.previousElementSibling as HTMLInputElement;

		if (event.key === 'Backspace' && input.value.length === 0 && prevInput) {
			prevInput.value = '';
			prevInput.focus();
			event.preventDefault();
			return;
		}

		if (event.key !== 'Backspace' && input.value.length === 1 && nextInput) {
			nextInput.focus();
			return;
		}
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
		focusOnInput(0);

		// update Gui
		guessList.push(correctedWord);
		guessList = guessList;

		// check for win
		let correctLetters = 0;
		correctedWord.letters.forEach((letter) => {
			if (letter.status === 'correct') correctLetters++;
		});

		if (correctLetters === 5) {
			const elapsedTime = getElapsedTimeInMiliseconds() / 1000;

			const postScore = async () => {
				const { data, error } = await supabaseClient.auth.getUser();
				if (error) {
					return null;
				}
				data;

				const score: IScore = {
					id: data.user.id,
					score: elapsedTime,
					username: data.user.user_metadata.user_name,
					user_uuid: data.user.id
				};

				const response = await fetch('/scoreboard', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(score)
				});

				if (!response.ok) {
					alert('Failed to save score!');
				}
			};
			postScore();
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
</script>

<main class:dark={darkMode}>
	<Header />
	<div>
		<h1>
			Language: {language}
		</h1>
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
					{#each Array.from({ length: 5 }) as _, index}
						<input
							class="wordinput"
							bind:this={wordInputs[index]}
							id={'input' + (index + 1)}
							name="input"
							minlength="1"
							maxlength="1"
							on:keydown={(event) => handleInputFocus(event)}
						/>
					{/each}
				</div>
				<button>Check Guess</button>
			</form>
		{/if}
	</div>
</main>

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
	:global(body) {
		margin: 0;
		font-family: Arial, sans-serif;
	}

	main {
		text-align: center;
		padding: 20px;
		height: 100%;
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
