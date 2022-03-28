import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>            
            <Link to="/products">Products</Link>            
            <Link to="/login">Login</Link>            
            <Link to="/register">Register</Link>            
        </div>
    );
};