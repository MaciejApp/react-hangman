import React from 'react'

const Rules = props => {
  return (
    <div className="popup-box">
      <div className="box">
        {/* Close button for the rules popup */}
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <h2>Rules of "Hangman"</h2>
        <ul>
          {/* List of rules for the game */}
          <li>Guess the word by selecting letters on keyboard.</li>
          <li>Each wrong guess will add a body part to the hangman.</li>
          <li>Guess the word before the hangman is complete</li>
          <li>You can restart anytime by clicking <strong>Reset</strong> button</li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;