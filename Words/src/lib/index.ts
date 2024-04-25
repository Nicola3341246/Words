// place files you want to import through the `$lib` alias in this folder.
export interface wordlist {
    words: string[];
}

export interface wordGuess{
    letters: letterGuess[];
}

export interface letterGuess{
    id: number;
    letter: string;
    status: "correct" | "exists" | "wrong" | string;
}