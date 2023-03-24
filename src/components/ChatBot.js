import React, { useState } from 'react';

function ChatBot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

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

    // update the response state with the response data
    setResponse(data.message);

    // reset the text input form
    setMessage('');
    console.log(data.data)
    console.log(res.data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}
export default ChatBot;