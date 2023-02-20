import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { FaSave } from 'react-icons/fa';

function Output({ response, loading }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const text = response.join(' ');
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <Container id='output'>
      <h3 className='text-center'>Your Ad Below</h3>
      {response && (
        <Card>
          <Card.Body>
            {response.map((textParcel, index) => (
              <p key={index}>{textParcel}</p>
            ))}
            <button
              className="btn btn-primary mt-2"
              onClick={handleCopyClick}
              disabled={copied}
            >
              <FaSave /> {copied ? "Copied!" : "Copy to Clipboard"}
            </button>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default Output;
