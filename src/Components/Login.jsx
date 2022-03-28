import React from "react";
import { AuthContext } from "../Contexts/AuthContext";

export const Login = () => {
    const { login } = React.useContext(AuthContext);
    const [formDetails, setFormDetails] = React.useState({
        password: "",
        username: ""
    });

    const handleChange = (e) => {
       // console.log(e.target.value);
        const { name, value } = e.target;
       // console.log(name, value);
        setFormDetails({
            ...formDetails,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formDetails);
        fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
            mode: "no-cors",
            method: "POST",
            body: JSON.stringify(formDetails),
            header: { "Content-Type": "application/json" }
        })
        .then((res) => res.json())
        .then((res) => login(res.token))
        .catch((err) => console.log(err));
    };

    const { password, username } = formDetails;
    return(
        <form onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <input
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            />
            <br />
            <input
            name="password"
            type="text"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            />
            <br />
            <input
            type="submit"
            value="Login"
            />
        </form>
    );
};