import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      {/* This notification is displayed when a user enters a letter that has already been used */}
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification