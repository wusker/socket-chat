import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="inner-container">
      <h1>Join a Room</h1>
      <label htmlFor="name">Name</label>
      <input name="name" placeholder="Name" className="" type="text" onChange={e => setName(e.target.value)} />


      <label htmlFor="room">Room</label>
      <input name="room" placeholder="Room" className="" type="text" onChange={e => setRoom(e.target.value)} />

      <Link
        to={`/chat?name=${name}&room=${room}`}
        onClick={
          e => (!name || !room
            ? e.preventDefault()
            : null)
        }
      >
        <button type="submit">Sign In</button>
      </Link>
    </div>
  )
}

export default Join;