import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { CompanyLogo, NavBarContainer } from './StyledComponents';
import { StyledLink } from './StyledComponents';
import { NavBarContents } from './StyledComponents';


export default function NavBarLinks() {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    function styleByActiveStatus(isActive) {
        return isActive ? { 
            fontWeight: "bold",
            color: "blue",
            textDecoration: "none"
            } : {
                fontWeight: "regular",
                color: "black",
                textDecoration: "none"
            };
    };

    return (
        <NavBarContents>
            <div class="d-flex">
                #
            </div>

            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
                <CompanyLogo path="/">Logo/Company Name</CompanyLogo>
            </NavLink>

            <div class="d-flex">
                {!loggedInUser ? (
                    <NavLink to="/Login" style={({isActive}) => styleByActiveStatus(isActive)}>
                        <StyledLink path="/Login" class="mx-2">
                            <div>Login</div>
                        </StyledLink>
                    </NavLink>
                ) 
                : 
                (
                    <NavLink to="/Account" style={({isActive}) => styleByActiveStatus(isActive)}>
                        <StyledLink path="/Account" class="mx-2">"Username"</StyledLink>
                    </NavLink>
                )}

                <NavLink to="/Cart" style={({isActive}) => styleByActiveStatus(isActive)}>
                    <StyledLink path="/Cart" class="mx-2">Cart</StyledLink>
                </NavLink>
            </div>
        </NavBarContents>
    );

};