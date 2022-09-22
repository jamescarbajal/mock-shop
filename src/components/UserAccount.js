import { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { AccountButton, AccountCard, FloatingHeader, ColumnContainer, StyledButton } from "./StyledComponents";

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
            <FloatingHeader>Your Account</FloatingHeader>
            <ColumnContainer>
                <div class="container-fluid row d-flex flex-row justify-content-evenly align-items-evenly">
                    <AccountCard class="col-12 col-md-6">
                        <h3 class="display-6 my-2">Account Info</h3>
                        <div>UserID: </div>
                        <div>Email: {User}</div>
                        <div>Recovery Email:</div>
                        <div>Password: </div>
                    </AccountCard>
                    <AccountCard class="col-12 col-md-6">
                        <h3 class="display-6 my-2">User Profile</h3>
                        <div>Name: </div>
                        <div>Phone Number: </div>
                        <div>Shipping Address: </div>
                        <div>Billing Address: </div>
                        <div></div>
                    </AccountCard>
                </div>
                    <AccountButton style={{ marginTop: '10px' }} onClick={HandleLogout}>Logout</AccountButton>
            </ColumnContainer>
        </>

    );
};