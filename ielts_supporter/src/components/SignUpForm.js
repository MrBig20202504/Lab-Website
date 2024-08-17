import React, { useState } from "react";
import "./SignUpForm.css";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

function SignUpArea() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const register = async () => {
    const userDetails = {
      email: document.getElementById('email').value,
      encrypted_password: document.getElementById('psw').value,
      user_name: document.getElementById('UserName').value,
      first_name: document.getElementById('FirstName').value,
      last_name: document.getElementById('LastName').value,
      dob: document.getElementById('dob').value,
      phone: document.getElementById('phone').value,
    };

    const response = await fetch('http://10.60.1.203:8080/authentication/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonResponse = await response.json();
    setData(jsonResponse)
    if (jsonResponse.data) {
      alert(jsonResponse.message)
      navigate("/")
    } else {
      alert(jsonResponse.message);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Container>
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="UserName"><b>User Name</b></label>
        <input type="text" placeholder="Enter User Name" name="text" required id="UserName" />

        <Row>
          <Col>
            <label htmlFor="FirstName"><b>First Name</b></label>
            <input type="text" placeholder="Enter First Name" name="text" required id="FirstName" />
          </Col>
          <Col>
            <label htmlFor="LastName"><b>Last Name</b></label>
            <input type="text" placeholder="Enter Last Name" name="text" required id="LastName" />
          </Col>
        </Row>

        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required id="email" />

        <Row>
          <Col>
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required id="psw" />
          </Col>
          <Col>
            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required id="psw-repeat" />
          </Col>
        </Row>
        
        <Row>
          <Col>
            <label htmlFor="Phone"><b>Phone</b></label>
            <input type="phone" placeholder="Enter phone number" name="phone" required id="phone" />
          </Col>
          <Col>
            <label htmlFor="dob"><b>Birth Date:</b></label>
            <input type="date" name="dob" required id="dob" /></Col>
        </Row>

        <label>
          <input type="checkbox" defaultChecked name="remember" /> Remember me
        </label>

        <p>By creating an account you agree to our Terms & Privacy</p>

        <div className="clearfix">
          <button type="button" className="cancelbtn">Cancel</button>
          <button type="submit" className="signupbtn" onClick={register}>Sign Up</button>
        </div>
      </Container>
    </form>
  );
}

export default SignUpArea;
