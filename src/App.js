import { React, useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [savedCounts, setSavedCounts] = useState([]);
  //increase counter
  const increaseOne = () => {
    setCounter((count) => count + 1);
  };

  const increaseFive = () => {
    setCounter((count) => count + 5);
  };
  //decrease counter
  const decreaseOne = () => {
    setCounter((count) => count - 1);
  };

  const decreaseFive = () => {
    setCounter((count) => count - 5);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  const saveCount = () => {
    setSavedCounts([...savedCounts, counter]);
    console.log(counter);
    reset();
  };

  return (
    <div className='counter'>
      <h1>React Counter</h1>
      <span className='counter__output'>{counter}</span>
      <div className='btn__container'>
        <button className='control__btn' onClick={decreaseFive}>
          -5
        </button>
        <button className='control__btn' onClick={decreaseOne}>
          -1
        </button>
        <button className='reset' onClick={reset}>
          Reset
        </button>
        <button className='control__btn' onClick={increaseOne}>
          +1
        </button>
        <button className='control__btn' onClick={increaseFive}>
          +5
        </button>
        <button className='reset' onClick={saveCount}>
          Save
        </button>
      </div>
      <ul className='historyList'>
        {savedCounts.map((saveCount, index) => (
          <li key={index}>{saveCount}</li>
        ))}
      </ul>
    </div>
  );
}
