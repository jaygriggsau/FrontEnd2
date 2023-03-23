import React, { useState } from 'react';

function ChatBot() {
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const res = await fetch('https://adblitzserver.herokuapp.com/adstyles/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    // create a new p tag with the response data
    const newPTag = document.createElement('p');
    newPTag.textContent = data.message;
    document.body.appendChild(newPTag);

    // reset the text input form
    setMessage('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ChatBot;
