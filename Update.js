import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Update() {
    const [rror, setError] = useState({});
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        avatar: "",
        level: 0

    });
    useEffect(() => {
        let userData = localStorage.getItem("appState");
        if (userData) {
            userData = JSON.parse(userData);
            userData = userData.user

            setUser({
                name: userData.auth.name,
                email: userData.auth.email,
                password: userData.auth.password,
                phone: userData.auth.phone,
                address: userData.auth.address,
                avatar: userData.auth.avatar


            });

        }
    }, [])

    const handeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user, [name]: value
        });
    };

    const handeSubmit = (e) => {
        e.preventDefault();
        console.log(user)

     };

    return (
        <>  <div className="col-sm-9">
            <div className="blog-post-area">
                <h2 className="title text-center">Update user</h2>
                <div className="signup-form">{/*sign up form*/}
                    <h2>New User Signup!</h2>
                     <form onSubmit={handeSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handeInput} />
                <input type="email" name="email" placeholder="Email Address" onChange={handeInput} />
                <input type="password" name="password" placeholder="Password" onChange={handeInput} />
                <input type="text" name="phone" placeholder="Phone" onChange={handeInput} />
                <input type="text" name="address" placeholder="Address" onChange={handeInput} />
                 <button type="submit" className="btn btn-default">Signup</button>
            </form>
                </div>
            </div>
        </div>

        </>
    )






}

export default Update