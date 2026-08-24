import React, { useState } from "react";
import axios from "axios";

function Register() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        avatar: "",
        level: 0
    });

    const [error, setError] = useState({});

    const handleInput = (e) => {
        const nameInput = e.target.name;
        const valueInput = e.target.value;
        setInput((state) => ({ ...state, [nameInput]: valueInput }));
    };

    function handleSubmit(e) {
        e.preventDefault();




        let errorsSubmit = {};
        let flag = true;

        if (input.name == "") {
            errorsSubmit.name = "nhap name";
            flag = false;
        }

        if (input.email === "") {
            errorsSubmit.email = "Nhập email";
            flag = false;
        }

        if (input.password === "") {
            errorsSubmit.password = "Nhập password";
            flag = false;
        }

        if (input.address === "") {
            errorsSubmit.address = "nhap address";
            flag = false;
        }

        if (input.phone === "") {
            errorsSubmit.phone = "nhap phone";
            flag = false;
        }

        if (!flag) {
            setError(errorsSubmit);
        } else {
            const data = {
                name: input.name,
                email: input.email,
                password: input.password,
                phone: input.phone,
                address: input.address,
                avatar: "",
                level: 0
            }

            axios.post('http://localhost/laravel8/laravel8/public/api/register', data)
                .then(Response => {
                    console.log(Response)

                    if (Response.data.errors) {
                        setError(Response.data.errors)
                    } else {
                        alert("thanh comg")
                    }

                })








        }


    }

    function renderError() {
        if (Object.keys(error).length > 0) {
            return Object.keys(error).map((key, index) => (
                <li key={index}>{error[key]}</li>
            ));
        }
    }
    const [avatar, setavatar] = useState("");
    const [file, setFile] = useState("")

    function handleUserInputFile(e) {
        const file = e.target.files;

        let reader = new FileReader();
        reader.onload = (e) => {
            setavatar(e.target.result)
            setFile(file[0]);
        };
        reader.readAsDataURL(file[0]);

    }

    return (
        <div className="signup-form">
            <h2>Signup</h2>

            <ul>
                {renderError()}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleInput} />
                <input type="email" name="email" placeholder="Email Address" onChange={handleInput} />
                <input type="password" name="password" placeholder="Password" onChange={handleInput} />
                <input type="text" name="phone" placeholder="Phone" onChange={handleInput} />
                <input type="text" name="address" placeholder="Address" onChange={handleInput} />
                <input type="file" name="avatar"    onChange={handleUserInputFile}/>
                <button type="submit" className="btn btn-default">Signup</button>
            </form>
        </div>
    );
}

export default Register;