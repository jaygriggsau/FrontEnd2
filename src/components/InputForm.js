import React, { useState } from 'react';

//Grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Forms
import { Form, Button, FormControl, Spinner } from 'react-bootstrap';


function InputForm(props) {
        const [companyName, setCompanyName] = useState('');
        const [productName, setProductName] = useState('');
        const [productDesc, setProductDesc] = useState('');
        const [targetAudience, setTargetAudience] = useState('');
        const [targetAudienceDesc, setTargetAudienceDesc] = useState('');
        const [spinner, setSpinner] = useState(false)

        const handleSubmit = async (e) => {
            e.preventDefault();
            setSpinner(true)
            

            try {
              const res = await fetch(`https://adblitzserver.herokuapp.com/adstyles/${props.selectedStyle}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ companyName, productName, productDesc, targetAudience, targetAudienceDesc }),
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
            <h3 className='text-center'>Create your Ad</h3>
            <h5 className='text-center'>Simply fill in the blanks as best you can and click generate ad to get high converting copy in a few seconds! The better the details, the better the output</h5>
            <Row>
              <Col sm={12} lg={5}>
                <Form onSubmit={handleSubmit}>
            <Form.Label>Company Name</Form.Label>
            <FormControl
                type="text"
                value={companyName}
                placeholder="Company Name"
                onChange={(e) => setCompanyName(e.target.value)}
            />
            <Form.Label>Product Name</Form.Label>
            <FormControl
                type="text"
                value={productName}
                placeholder="Product Name"
                onChange={(e) => setProductName(e.target.value)}
            />
            <Form.Label>Product Description</Form.Label>
            <FormControl
                type="text"
                value={productDesc}
                placeholder="Describe your product in detail"
                onChange={(e) => setProductDesc(e.target.value)}
                as="textarea" 
                rows={4}
            />
            <Form.Label>Target Audience</Form.Label>
            <FormControl
                type="text"
                value={targetAudience}
                placeholder="Target Audience"
                onChange={(e) => setTargetAudience(e.target.value)}
            />
            <Form.Label>Target Audience Description</Form.Label>
            <FormControl
                type="text"
                value={targetAudienceDesc}
                placeholder="Describe your Target Audience in detail"
                onChange={(e) => setTargetAudienceDesc(e.target.value)}
                as="textarea" 
                rows={3}
            />
            <Button variant="primary" className='submitbtn text-center' type="submit">Generate Ad!</Button>
            </Form>
            {spinner && <Spinner animation="grow" />}
        </Col>
      </Row>
    </Container>
  );
}

export default InputForm