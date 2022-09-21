import { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { StyledButton } from "./StyledComponents";

export default function UserAccount(props) {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    const navigate = useNavigate();

    const User = JSON.parse(localStorage.getItem('USER_AUTH')) || "";

    const HandleLogout = (e) => {
        e.preventDefault();
        setLoggedInUser("");
        navigate('/Login');
    };

    return(

        <>
            <div>Your Account</div>
            <div>Name: </div>
            <div>Email: {User}</div>
            <div>Shipping Address: </div>
            
            <StyledButton onClick={HandleLogout}>Logout</StyledButton>
        </>

    );
};