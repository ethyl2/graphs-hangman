import React, { useState } from 'react';
import vocab from '../data/vocab';

export default function Game() {
  const [currentTerm, setCurrentTerm] = useState(vocab[0].term);
  const [currentTermLetters, setCurrentTermLetters] = useState(
    new Set(vocab[0].term)
  );
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [rejectedLetters, setRejectedLetters] = useState([]);
  const [currentLetterGuess, setCurrentLetterGuess] = useState('');

  function getNewTerm() {
    const newIndex = Math.floor(Math.random() * (vocab.length - 1));
    console.log(newIndex);
    setCurrentTerm(vocab[newIndex].term);
  }

  function displayTerm(term) {
    let termLetters = '';
    let currentLetter;
    for (let i = 0; i < term.length; i++) {
      currentLetter = term.charAt(i);
      if (currentLetter !== ' ') {
        //console.log(term.charAt(i));
        termLetters += '_ ';
      } else termLetters += '  *  ';
    }
    return termLetters;
  }

  function handleLetterGuessChange(e) {
    setCurrentLetterGuess(e.target.value);
    //console.log(e.target.value);
    console.log(currentLetterGuess);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let guessedLettersCopy = new Set(guessedLetters);
    guessedLettersCopy.add(currentLetterGuess);
    setGuessedLetters(guessedLettersCopy);
    console.log(guessedLetters);
    setCurrentLetterGuess('');
    if (currentTermLetters.has(currentLetterGuess)) {
      console.log('Guessed a letter correctly!');
    } else {
      console.log('Oh no! That letter is not in the word');
      setRejectedLetters([...rejectedLetters, currentLetterGuess]);
    }
  }

  return (
    <section>
      <h2>Game goes here</h2>
      <h3>{displayTerm(currentTerm)}</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="currentLetterGuess"
          value={currentLetterGuess}
          onChange={handleLetterGuessChange}
        />
        <button type="submit">Check Letter</button>
        <h4>Rejected Letters</h4>
        <p>
          {rejectedLetters.map((letter) => {
            return `${letter} `;
          })}
        </p>
      </form>
    </section>
  );
}
