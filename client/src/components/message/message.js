import React from 'react';

import ReactEmoji from 'react-emoji';

import './message.css';

const Message = ({ message: { user, text }, name }) => {
  let sentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    sentByCurrentUser = true;
  }

  return (
    sentByCurrentUser
      ? (
        <div className="message justifyEnd">
          <p className="sender">{trimmedName}</p>
          <div>
            <p className="text">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
      : (
        <div className="message justifyStart">
          <p className="sender">{trimmedName}</p>
          <div>
            <p className="text dark">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
  )
}

export default Message;