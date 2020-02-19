import React from 'react';

import './textContainer.css';

const TextContainer = ({ users }) => (
  <div className="currently-chatting">
    <div>
    </div>
    {
      users
        ? (
          <div>
            <h3>People currently chatting:</h3>
            <div>
              <h2>
                {users.map(({ name }) => (
                  <div key={name}>
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;