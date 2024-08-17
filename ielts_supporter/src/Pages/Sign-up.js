import React, { useState } from "react";
import LoginArea from "../components/LoginForm";
import SignUpArea from "../components/SignUpForm";
import Footer from "../components/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleScreen = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <Container fluid className="sign-up-container">
        <Row>
          <Col lg={7}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/036/290/674/original/ielts-international-english-language-testing-system-students-preparing-for-exam-and-studying-to-improve-languages-english-proficiency-test-flat-illustration-template-vector.jpg"
              alt="LargePic"
              loading="lazy"
              style={{ width: "100%" }}
            />
          </Col>
          <Col
            lg={5}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="right">
              <div className="form-container">
                {showLogin ? <LoginArea /> : <SignUpArea />}
                <button onClick={toggleScreen}>
                  {showLogin ? "Create an Account" : "Already have an Account? Login"}
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
