import React from 'react'

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {/* Map through each letter of the selected word and create a span element for each one */}
      {selectedWord.split('').map( (letter, i) => {
          return (
          <span className="letter" key={i}>
            {/* If the letter has been guessed correctly, display it. Otherwise, leave it blank */}
            {correctLetters.includes(letter) ? letter : ''}
          </span>
          )
      })}
    </div>
  )
}

export default Word