import React, { useEffect, useState } from 'react'

const Figure = ({wrongLetters}) => {
// This variable keeps track of the number of errors made
  const errors = wrongLetters.length;
// This state is used to keep track of the current error count to display the appropriate image
  const [errorCount, setErrorCount] = useState(1);

// This useEffect hook updates the errorCount state whenever the errors variable changes
  useEffect(() => {
    setErrorCount(errors+1);
  }, [errors])
  return (
    <div className="figure-container">
       {/* This displays the appropriate image based on the errorCount state */}
      <img src={`./images/state${errorCount}.GIF`} alt="Hangman" />
    </div>
  )
}

export default Figure