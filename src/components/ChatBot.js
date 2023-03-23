import React, { useState } from 'react';

//Grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Forms
import { Form, Button, FormControl, Spinner } from 'react-bootstrap';


function ChatBot(props) {
        const [message, setMessage] = useState('');
        const [response, setResponse] = useState('');
        const [spinner, setSpinner] = useState(false)

        const handleSubmit = async (e) => {
            e.preventDefault();
            setSpinner(true)

            try {
              const res = await fetch(`https://adblitzserver.herokuapp.com/adstyles/chat`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
              });
              const json = await res.json();
              var responseText = json.data.split(/\n\n|\n/);
              props.setResponse(responseText); // Update the response state in the parent App component
              
              props.onGenerateAd(); // Call the onGenerateAd prop to update the showOutput state in the parent App component
            } catch (err) {
              console.error(err);
            }
          }; 
        return (
          <Container>
            <h3 className='text-center'>Chat Bot</h3>
            <Row>
              <Col sm={12} lg={5}>
                <Form onSubmit={handleSubmit}>
            <Form.Label>Start Talking</Form.Label>
            <FormControl
                type="text"
                value={message}
                placeholder="Say Hello"
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="primary" className='submitbtn text-center' type="submit">Generate Ad!</Button>
            </Form>
            {spinner && <Spinner animation="grow" />}
        </Col>
      </Row>
    </Container>
  );
}

export default ChatBot