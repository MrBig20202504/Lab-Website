import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginArea() {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const login = async () => {
        const userDetails = {
            email: document.getElementById('email').value,
            password: document.getElementById('psw').value,
        };
        console.log(userDetails)
        const response = await fetch('http://10.60.1.203:8080/authentication/login', {
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
        setData(jsonResponse);
        if (jsonResponse.data) {
            navigate("/Admin7355608");
        } else {
            alert(jsonResponse.message);
        }
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="container">
                <h1>Login</h1>

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                <label>
                    <input type="checkbox" defaultChecked name="remember" /> Remember me
                </label>

                <div className="clearfix">
                    <button type="reset" className="cancelbtn">Cancel</button>
                    <button type="button" className="loginbtn" onClick={login}>Login</button>
                </div>
            </div>
        </form>
    );
}

export default LoginArea;
