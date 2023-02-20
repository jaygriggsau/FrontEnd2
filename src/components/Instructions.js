import { Container, Col, Row } from "react-bootstrap";

function Instructions (){
    return (
        <Container className="text-center">
            <Row>
                <Col sm={1} lg={2}>

                </Col>
                <Col sm={10} lg={8}>
                    <h2>Welcome to Innovatio's AI Ad Generator</h2>
                    <p>Welcome to our amazing tool that helps you create <strong>high-converting ad copy in just a few seconds!</strong> We are thrilled to have you here, and we can't wait to help you achieve the best possible results for your business. With our tool, all you need to do is fill in the blanks with your best details, and voila! You'll have top-performing copy in no time.</p>

                    <p>We believe that attention to detail is the key to creating powerful and effective ad copy. That's why we encourage you to take your time when filling in the blanks. The more you tell us about your business, your audience, and your goals, the better the output will be. Don't worry if you're not a professional writer – our tool is designed to do the hard work for you, so you can focus on running your business.</p>

                    <p>We understand that creating ad copy that resonates with your audience can be a challenge. It's not always easy to know what language to use, what benefits to highlight, and how to stand out from the competition. That's why we've made it our mission to help you create ad copy that speaks directly to your audience and drives them to take action.</p>

                    <p>So, what are you waiting for? Let's get started and see what kind of amazing ad copy we can create together. Remember, the more details you provide, the better the output will be. We can't wait to see what you come up with!</p>
                </Col>
                <Col sm={1} lg={2}>

                </Col>
            
            </Row>
        </Container>
    )
}
export default Instructions