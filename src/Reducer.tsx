

interface Joke {
  id: number;
  joke: string;
  rate: number;
}

type Action =
  | { type: 'ADD_JOKE'; joke: string }
  | { type: 'UPDATE_RATE'; id: number; rate: number }
  | { type: 'DELETE_JOKE'; id: number };

export const initialState: Joke[] = [
  { id: 1, joke: 'What do you call a very small valentine? A valen-tiny!', rate: 3 },
  { id: 2, joke: 'What did the dog say when he rubbed his tail on the sandpaper? Rough, rough!', rate: 2 },
  { id: 3, joke: 'A termite walks into the bar and says, "Where is the bar tender?"', rate: 1 },
  { id: 4, joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!', rate: 0 },
  { id: 5, joke: 'Why was the math book sad? Because it had too many problems.', rate: 0 }
];

export const reducer = (state: Joke[], action: Action): Joke[] => {
  switch (action.type) {
    case 'ADD_JOKE':
      const newJoke: Joke = { id: state.length + 1, joke: action.joke, rate: 0 };
      return [...state, newJoke];
    case 'UPDATE_RATE':
      return state.map(joke =>
        joke.id === action.id ? { ...joke, rate: action.rate } : joke
      );

    case 'DELETE_JOKE':
        return state.filter(joke => joke.id !== action.id);
    default:
      return state;
  }
};
