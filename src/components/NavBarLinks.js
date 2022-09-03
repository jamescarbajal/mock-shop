import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { CompanyLogo, NavBarContainer } from './StyledComponents';
import { StyledLink } from './StyledComponents';
import { NavBarContents } from './StyledComponents';
import { HamburgerContainer} from './StyledComponents';
import HamburgerMenu from '../HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBarLinks() {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    function styleByActiveStatus(isActive) {
        return isActive ? { 
            fontWeight: "bold",
            color: "black",
            textDecoration: "none",
            } : {
                fontWeight: "regular",
                color: "black",
                textDecoration: "none"
            };
    };

    return (
        <>
            <NavBarContents>
                <HamburgerContainer>
                    <HamburgerMenu />
                </HamburgerContainer>

                <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
                    <CompanyLogo path="/">B | R | S</CompanyLogo>
                </NavLink>

                <div class="d-flex">
                    {!loggedInUser ? (
                        <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/Login">
                            <StyledLink style={({isActive}) => styleByActiveStatus(isActive)} path="/Login" class="mx-2">
                                <div>Login</div>
                            </StyledLink>
                        </NavLink>
                    ) 
                    : 
                    (
                        <NavLink to="/Account" >
                            <StyledLink style={({isActive}) => styleByActiveStatus(isActive)} path="/Account" class="mx-2">"Username"</StyledLink>
                        </NavLink>
                    )}

                        <StyledLink><FontAwesomeIcon icon="fa-regular fa-cart-shopping" /></StyledLink>

                </div>
        </NavBarContents>
    </>
    );

};