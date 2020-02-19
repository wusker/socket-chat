import React from 'react';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {
  let sentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    sentByCurrentUser = true;
  }

  return (
    sentByCurrentUser
      ? (
        <div className="justifyEnd">
          <p>{trimmedName}</p>
          <div className="light">
            <p>{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
      : (
        <div className="justifyStart">
          <p>{trimmedName}</p>
          <div className="dark">
            <p>{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
  )
}

export default Message;