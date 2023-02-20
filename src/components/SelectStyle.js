import { Container, Row, Col, Button, Card } from "react-bootstrap"

function SelectStyle ({onStyleSelect}){

  function handleButtonClick(adStyle) {
    onStyleSelect(adStyle);
  }
    
    return (
        <Container>
            <h2 className="text-center" id="selectAd">Select an Ad Template</h2>
            <Row className="text-center">
                <Col sm={12} md={4}>
                    <Card>
                        <Card.Header>AICPBSAWN Formula</Card.Header>
                        <Card.Body>
                            <Card.Title>Create powerful AICPBSAWN ads in minutes!</Card.Title>
                                <Card.Text>
                                    This formula creates effective ad copy that captures the reader's attention, generates interest, establishes credibility, provides proof, lists out benefits, creates scarcity, calls for action, warns of consequences if action is not taken, and motivates the reader to act immediately. Using this formula, you can create persuasive and compelling ads. 
                                </Card.Text>
                            <Button variant="primary" onClick={() => handleButtonClick("style1")}>Use This Template</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4}>
                    <Card>
                        <Card.Header>The PPPP Ad</Card.Header>
                        <Card.Body>
                            <Card.Title>Create compelling ads in minutes with PPPP power!</Card.Title>
                                <Card.Text>
                                The PPPP style is a framework for developing effective advertising content that consists of four key components: product, price, promotion, and place. By following this framework, businesses and individuals can create persuasive and compelling advertisements for their products or services in a quick and easy way. 
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleButtonClick("style2")}>Use This Template</Button>

                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4}>
                    <Card>
                        <Card.Header>The Before–After–Bridge</Card.Header>
                        <Card.Body>
                            <Card.Title>Create a Powerful B-A-B ad!</Card.Title>
                                <Card.Text>
                                The Before-After-Bridge formula is a framework widely used in marketing and advertising to create persuasive and compelling copy. The framework is divided into three components - Before, After, and Bridge - that together help marketers to present a clear and compelling message that captures the reader's attention and drives conversion 
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleButtonClick("style3")}>Use This Template</Button>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-2 text-center">
                <Col sm={12} md={4}>
                    <Card>
                        <Card.Header>The Perfect Ad</Card.Header>
                        <Card.Body>
                            <Card.Title>A Fantastic Ad Formula!</Card.Title>
                                <Card.Text>
                                These strategies include painting a vivid picture of the problem, sharing a personal story of transformation, addressing the unspoken truth or annoyance that readers may have to address common objections and build trust. By implementing these strategies, marketers can create compelling and persuasive copy that resonates with their audience and drives conversions. 
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleButtonClick("style4")}>Use This Template</Button>

                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4}>
                    <Card>
                        <Card.Header>The P-A-S Ad</Card.Header>
                        <Card.Body>
                            <Card.Title>Create Converting P-A-S!</Card.Title>
                                <Card.Text>
                                The PAS formula is a widely used advertising framework that stands for Problem-Agitate-Solve. It involves identifying the reader's problem, agitating the problem to create an emotional response, and presenting a solution to the problem. In the context of ads, the PAS formula can be used to create persuasive and effective copy that resonates with the reader and drives conversions
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleButtonClick("style5")}>Use This Template</Button>

                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4}>
                    <Card>
                        <Card.Header>The 7 Stage Ad</Card.Header>
                        <Card.Body>
                            <Card.Title>A Powerful 7 Stage Formula</Card.Title>
                                <Card.Text>
                                The 7-stage ad formula is a concise and effective framework that involves capturing attention, presenting a problem and solution, highlighting benefits and social proof, including a clear call to action, and creating urgency through a deadline. This framework helps advertisers create persuasive and compelling ads that motivate readers to take action.
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleButtonClick("style6")}>Use This Template</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SelectStyle