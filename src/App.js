import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import Rules from './components/Rules';
import { showNotification as show, checkWin, dictionary } from './helpers/helpers';

import './App.css';

// bring in dictionary from helpers.js to select random word

let wordsArray = [];
// split dictionary into array of words
wordsArray = dictionary.split(/\r?\n|\r|\n/g);
// select random word from array and convert to lowercase
let selectedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)].toLowerCase();
// remove any special characters from word
selectedWord = selectedWord.replace(/[^a-zA-Z0-9 ]/g, '')

const correctLetters = [];
const wrongLetters = [];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    // check if letter is in selected word
          if (selectedWord.includes(letter)) {
            // check if letter is already in correctLetters array
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]);
            } else {
              show(setShowNotification);
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [...wrongLetters, letter]);
            } else {
              show(setShowNotification);
            }
          }
        }
      }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);

  }, [correctLetters, wrongLetters, playable]
  );
  // function to reset game and select new word
  function playAgain() {
    setPlayable(true);
    // Empty arrays
    setCorrectLetters([]);
    setWrongLetters([]);
    const random = Math.floor(Math.random() * wordsArray.length);
    selectedWord = wordsArray[random].toLowerCase();
    selectedWord = selectedWord.replace(/[^a-zA-Z0-9 ]/g, '')
  }
// function to toggle rules modal
  const toggleRules = () => {
    setShowRules(!showRules);
  }

  return (
    <>
      <div className='wrapper'>
        <Header />
        <div className='game-container'>
          {/* container with buttons to control game */}
          <div className='controls'>
            <button onClick={toggleRules}>Rules</button>
            <button onClick={playAgain}>Reset</button>
          </div>
          {/* container with hangman figure */}
          <Figure wrongLetters={wrongLetters} />
          {/* container with wrong letters */}
          <WrongLetters wrongLetters={wrongLetters} />
          {/* container with word - each letter in individual "box" */}
          <Word selectedWord={selectedWord} correctLetters={correctLetters} />
          </div>
          {/* popup with information regarding if game has been won or lost*/}
          <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
          {/* modal with list of rules */}
          {showRules && <Rules handleClose={toggleRules} />}
          {/* popup with informing user if same letter has been used twice as a input */}
          <Notification showNotification={showNotification} />
      </div>
    </>
  );
}

export default App;
