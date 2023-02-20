import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopBar from './components/TopBar'
import SelectStyle from './components/SelectStyle';
import Instructions from './components/Instructions';
import InputForm from './components/InputForm';
import Output from "./components/Output";
import Footer from "./components/Footer";

function App() {
  const [selectedStyle, setSelectedStyle] = useState("");
  const [showInstructions, setShowInstructions] = useState(true);
  const [showSelectStyle, setShowSelectStyle] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleStyleSelect(style) {
    setSelectedStyle(style);
    setShowInstructions(false);
    setShowSelectStyle(false);
  }

  function handleGenerateAd() {
    setShowOutput(true);
  }

  return (
    <Container className="App">
      <TopBar />
      {showInstructions && <Instructions />}
      {showSelectStyle && (
        <SelectStyle onStyleSelect={handleStyleSelect} />
      )}
      {showOutput && (
        <Output response={response} loading={loading} />
      )}
      {!showInstructions && !showSelectStyle && !showOutput && (
        <InputForm
          selectedStyle={selectedStyle}
          onGenerateAd={handleGenerateAd}
          setResponse={setResponse}
          setLoading={setLoading}
        />
      )}
      <Footer />
    </Container>
  );
}


export default App;
