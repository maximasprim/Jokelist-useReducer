import  { useReducer } from 'react';
import './App.scss';
import { initialState, reducer } from './Reducer';

function App(){
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateRate = (id: number, rate: number) => {
    dispatch({ type: 'UPDATE_RATE', id, rate });
  };



  const handleSubmit = (e: any) => {
    e.preventDefault();
    const jokeInput = (e.target as HTMLFormElement).elements[0] as HTMLInputElement;
    if (jokeInput.value.trim()) {
      dispatch({ type: 'ADD_JOKE', joke: jokeInput.value });
      jokeInput.value = '';
    }
  };

  return (
    <div className='container'>
      <h2>Jokes for you 💀😂</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder='Add a joke' />
        <button type='submit'>Add Joke</button>
      </form>
      <div className="jokes">
        {state
          .sort((a, b) => b.rate - a.rate)
          .map((joke) => (
            <div key={joke.id} className='joke'>
              <div className='joke-text'>{joke.joke}</div>
              <div className='text'>{joke.rate}</div>
              <div className="joke-buttons">
                <button onClick={() => updateRate(joke.id, joke.rate + 1)}>👍</button>
                <button onClick={() => updateRate(joke.id, joke.rate - 1)}>👎</button>
                <button onClick={() => updateRate(joke.id, 0)}>Reset</button>
                <button onClick={() => dispatch({ type: 'DELETE_JOKE', id: joke.id })}>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
