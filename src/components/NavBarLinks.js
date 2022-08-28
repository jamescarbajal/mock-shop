import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { NavBarStyle } from '../components/StyledComponents';


export default function NavBarLinks() {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    function styleByActiveStatus(isActive) {
        return isActive ? { 
            fontWeight: "bold",
            color: "black",
            textDecoration: "none"
            } : {
                fontWeight: "bold",
                color: "darkblue",
                textDecoration: "none"
            };
    };

    return (
        <>
        <div class="Navbar-content">
            <div>
                HAMBURGER
            </div>
            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}><div path="/">Logo/Company Name</div></NavLink>
            <div class="d-flex">
                {!loggedInUser ? (
                    <NavLink to="/Login" style={({isActive}) => styleByActiveStatus(isActive)}><div path="/Login" class="mx-2">Login</div></NavLink>
                ) : (
                    <NavLink to="/Account" style={({isActive}) => styleByActiveStatus(isActive)}><div path="/Account" class="mx-2">"Username"</div></NavLink>
                )}

                <NavLink to="/Cart" style={({isActive}) => styleByActiveStatus(isActive)}><div path="/Cart" class="mx-2">Cart</div></NavLink>
            </div>
        </div>
        </>

    );

};