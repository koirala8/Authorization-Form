import React, { useState } from 'react';

function Login({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}

const contactInfo = (
  <ul>
            <li>client@example.com</li>
            <li>555.555.5555</li>
          </ul>
);


function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const enteredPassword = e.target.querySelector('input[type="password"]').value;
    const auth = enteredPassword === password;
    setAuthorized(auth);
  }

  return (
    <div>
      {authorized ? ( contactInfo
        <div id="authorization">
          <h1>Contact</h1>
          
        </div>
      ) : (
        <div>
          <h1>Hello</h1>
          <Login onSubmit={handleSubmit} />
        </div>
      )}
    </div>
  );
}

export default Contact;
