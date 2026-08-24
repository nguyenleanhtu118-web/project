import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: "",
        level: 0
    });

    const [error, setError] = useState({});

    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;

        setInput(state => ({ ...state, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        let errorsSubmit = {};
        let flag = true;

        if (input.email === "") {
            errorsSubmit.email = "nhập email";
            flag = false;
        }

        if (input.password === "") {
            errorsSubmit.password = "nhap password";
            flag = false;
        }

        if (!flag) {
            setError(errorsSubmit);
            return;
        }

        const data = {
            email: input.email,
            password: input.password,
            level: 0
        };

        axios.post("http://localhost/laravel8/laravel8/public/api/login", data)
            .then(Response => {

                if (Response.data.error)
                    setError(Response.data.error);

                else {
                    localStorage.setItem("token", Response.data.token); 
                    localStorage.setItem("auth", JSON.stringify(Response.data.Auth));
                    console.log(Response.data);
                    navigate('/');

                }


            })
            .catch(function (error) {
                console.log(error)
            })

    }

    function renderError() {
        if (Object.keys(error).length > 0) {
            return Object.keys(error).map((key, index) => (
                <li key={index}>{error[key]}</li>
            ));
        }
    }


    function handleLogout() {
        localStorage.clear();
        navigate('/member/login-register');
    }


    return (
        <div className="login-form">
            <h2>Login</h2>

            <ul>
                {renderError()}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleInput} />
                <input type="password" name="password" placeholder="Password" onChange={handleInput} />
                <button type="submit" className="btn btn-default">Login</button>
            </form>
        </div>
    );
}

export default Login;