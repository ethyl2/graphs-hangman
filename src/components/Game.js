import React, { useState } from 'react';
import vocab from '../data/vocab';
import skeleton0 from '../images/skeleton0.png';
import skeleton1 from '../images/skeleton1.png';
import skeleton2 from '../images/skeleton2.png';
import skeleton3 from '../images/skeleton3.png';
import skeleton4 from '../images/skeleton4.png';
import skeleton5 from '../images/skeleton5.png';
import skeleton6 from '../images/skeleton6.png';
import skeleton7 from '../images/skeleton7.png';
import skeleton8 from '../images/skeleton8.png';
import skeleton9 from '../images/skeleton9.png';
import skeleton10 from '../images/skeleton10.png';
import skeleton11 from '../images/skeleton11.png';
import skeleton12 from '../images/skeleton12.png';

export default function Game() {
  const skeletons = [
    skeleton0,
    skeleton12,
    skeleton11,
    skeleton10,
    skeleton9,
    skeleton8,
    skeleton7,
    skeleton6,
    skeleton5,
    skeleton4,
    skeleton3,
    skeleton2,
    skeleton1,
  ];

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
  const [numIncorrectGuesses, setNumIncorrectGuesses] = useState(-1);
  const [hasGuessedTerm, setHasGuessedTerm] = useState(false);

  const [message, setMessage] = useState('Choose a letter');
  const [showDefinition, setShowDefinition] = useState(false);

  const [termGuess, setTermGuess] = useState('');

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
    let letterInput = e.target.value[0];
    let letterMatcher = /^[a-zA-Z]+$/;

    if (letterInput && letterInput.match(letterMatcher)) {
      setCurrentLetterGuess(letterInput.toLowerCase());
    } else {
      setMessage('Please pick a letter a-z.');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (currentLetterGuess) {
      let guessedLettersCopy = new Set(guessedLetters);
      guessedLettersCopy.add(currentLetterGuess);
      setGuessedLetters(guessedLettersCopy);
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
        if (numIncorrectGuesses === skeletons.length - 3) {
          setMessage("Boo! You didn't guess the term in time.");
          setHasGuessedTerm(true);
          setGuessedLetters(new Set(currentTerm));
        }
      }
      setCurrentLetterGuess('');
    }
  }

  function toggleDefinition() {
    setShowDefinition(!showDefinition);
  }

  function handleTermSubmit(e) {
    e.preventDefault();
    if (termGuess === currentTerm) {
      setHasGuessedTerm(true);
      setMessage('You won!');
      setGuessedLetters(new Set(currentTerm));
    } else {
      setTermGuess('');
      setMessage('Try again');
    }
  }

  function handleTermGuessChange(e) {
    setTermGuess(e.target.value);
  }

  return (
    <section>
      <h2>Guess the 'scary' graphs term before the skeleton is complete!</h2>
      <div className="game">
        <div className="left">
          <h3>{displayTerm(currentTerm)}</h3>
          <h2>{message}</h2>
          {!hasGuessedTerm && (
            <>
              <form onSubmit={handleSubmit}>
                <input
                  className="letter-input"
                  name="currentLetterGuess"
                  value={currentLetterGuess}
                  onChange={handleLetterGuessChange}
                />
                <button type="submit">Check Letter</button>
              </form>
              <form onSubmit={handleTermSubmit}>
                <input value={termGuess} onChange={handleTermGuessChange} />
                <button type="submit">Guess Term</button>
              </form>
            </>
          )}
          {rejectedLetters.length > 0 && <h4>Rejected Letters</h4>}
          <p>
            {rejectedLetters.map((letter) => {
              return `${letter} `;
            })}
          </p>
          <button className="new-button" onClick={getNewTerm}>
            Get New Term
          </button>
          {hasGuessedTerm && (
            <div>
              <h2>{currentTerm}</h2>
              {showDefinition && <p>= {currentDefinition}</p>}
              <button className="definition-button" onClick={toggleDefinition}>
                {showDefinition ? 'Hide Definition' : 'Get Definition'}
              </button>
            </div>
          )}
        </div>
        <div className="right">
          <img src={skeletons[numIncorrectGuesses + 1]} alt="skeleton" />
        </div>
      </div>
    </section>
  );
}
