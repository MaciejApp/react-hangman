import React, { useEffect } from 'react'
import { checkWin } from '../helpers/helpers';

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
// This variable stores the message to be displayed to the user after the game ends
  let finalMessage = '';
// This variable stores the message to reveal the word after the user loses
  let finalMessageRevealWord = '';
// This variable keeps track of whether the game is still playable
  let playable = true;

 // Check if the user has won or lost
  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Correct! 😃';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Wrong. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

// This useEffect hook updates the playable state whenever the game is over
  useEffect(() => setPlayable(playable));

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}} >
      <div className="popup">
        {/* Displays the final message to the user */}
        <h2>{finalMessage}</h2>
        {/* Displays the word if the user loses */}
        <h3>{finalMessageRevealWord}</h3>
        {/* Play again button */}
        <button onClick={playAgain}><strong>Play Again</strong></button>
      </div>
    </div>
  )
}

export default Popup