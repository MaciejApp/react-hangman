import React from 'react'

const WrongLetters = ({wrongLetters}) => {
  return (
    <div className="wrong-letters-container">
        <div>
        <span>Wrong ➡︎ </span>
          {wrongLetters.length > 0 }
          {/* Map through the array of wrong letters and create a span element for each one */}
          {wrongLetters
            .map((letter, i) => <span key={i}>{letter}</span>)
            .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
        </div>
      </div>
  )
}

export default WrongLetters