import React, { useState } from 'react';
import vocab from '../data/vocab';

export default function Game() {
  const [currentTerm, setCurrentTerm] = useState(vocab[8].term.toLowerCase());
  const [currentTermLetters, setCurrentTermLetters] = useState(
    convertTermToSet(vocab[8].term.toLowerCase())
  );
  const [currentDefinition, setCurrentDefinition] = useState(
    vocab[8].definition
  );

  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [rejectedLetters, setRejectedLetters] = useState([]);
  const [currentLetterGuess, setCurrentLetterGuess] = useState('');
  const [numCorrectGuesses, setNumCorrectGuesses] = useState(0);
  const [numIncorrectGuesses, setNumIncorrectGuesses] = useState(0);
  const [hasGuessedTerm, setHasGuessedTerm] = useState(false);

  const [message, setMessage] = useState('Choose a letter');

  function getNewTerm() {
    const newIndex = Math.floor(Math.random() * (vocab.length - 1));
    setCurrentTerm(vocab[newIndex].term.toLowerCase());
    setCurrentTermLetters(convertTermToSet(vocab[newIndex].term.toLowerCase()));
    setGuessedLetters(new Set());
    setRejectedLetters([]);
    setNumCorrectGuesses(0);
    setNumIncorrectGuesses(0);
    setCurrentDefinition(vocab[newIndex].definition);
    setHasGuessedTerm(false);
    setMessage('Choose a letter');
  }

  function convertTermToSet(term) {
    let letterSet = new Set();
    let currentLetter;
    for (let i = 0; i < term.length; i++) {
      currentLetter = term.charAt(i);
      if (currentLetter !== ' ') {
        letterSet.add(currentLetter);
      }
    }
    return letterSet;
  }

  function displayTerm(term) {
    let termLetters = '';
    let currentLetter;
    for (let i = 0; i < term.length; i++) {
      currentLetter = term.charAt(i);
      if (guessedLetters.has(currentLetter)) {
        termLetters += currentLetter + ' ';
      } else if (currentLetter !== ' ') {
        termLetters += '_ ';
      } else termLetters += '  *  ';
    }
    return termLetters;
  }

  function handleLetterGuessChange(e) {
    let letterInput = e.target.value[0].toLowerCase();
    let letterMatcher = /^[a-zA-Z]+$/;
    if (letterInput.match(letterMatcher)) {
      setCurrentLetterGuess(letterInput);
    } else {
      setMessage('Please pick a letter a-z.');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let guessedLettersCopy = new Set(guessedLetters);
    guessedLettersCopy.add(currentLetterGuess);
    setGuessedLetters(guessedLettersCopy);
    setCurrentLetterGuess('');
    if (guessedLetters.has(currentLetterGuess)) {
      setMessage('You already guessed that letter. Guess again!');
    } else if (currentTermLetters.has(currentLetterGuess)) {
      setMessage('You guessed a letter correctly!');
      setNumCorrectGuesses(
        (prevNumCorrectGuesses) => prevNumCorrectGuesses + 1
      );
      if (numCorrectGuesses === currentTermLetters.size - 1) {
        setHasGuessedTerm(true);
        setMessage('You won!');
      }
    } else {
      setMessage('Oh no! That letter is not in the term!');
      setRejectedLetters([...rejectedLetters, currentLetterGuess]);
      setNumIncorrectGuesses(
        (prevNumIncorrectGuesses) => prevNumIncorrectGuesses + 1
      );
      console.log(numIncorrectGuesses);
    }
  }

  return (
    <section>
      <h2>Guess the Term</h2>
      <h3>{displayTerm(currentTerm)}</h3>
      <h4>{message}</h4>
      {!hasGuessedTerm && (
        <form onSubmit={handleSubmit}>
          <input
            name="currentLetterGuess"
            value={currentLetterGuess}
            onChange={handleLetterGuessChange}
          />
          <button type="submit">Check Letter</button>
          {rejectedLetters.length > 0 && <h4>Rejected Letters</h4>}
          <p>
            {rejectedLetters.map((letter) => {
              return `${letter} `;
            })}
          </p>
        </form>
      )}
      <button onClick={getNewTerm}>Get New Term</button>
      {hasGuessedTerm && (
        <div>
          <h2>{currentTerm}</h2>
          <p>= {currentDefinition}</p>
        </div>
      )}
    </section>
  );
}
