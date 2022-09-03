import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { CompanyLogo, StyledLink, NavBarContents, HamburgerContainer, CartCircle } from './StyledComponents';
import HamburgerMenu from '../HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../contexts/Cart/CartContext';

export default function NavBarLinks() {

    const { cartItems } = useContext(CartContext);

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    function styleByActiveStatus(isActive) {
        return isActive ? { 
            fontWeight: "bold",
            color: "black",
            textDecoration: "none",
            border: 'none'
            } : {
                fontWeight: "regular",
                color: "black",
                textDecoration: "none",
                border: 'none'
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

                        <NavLink style={{ textDecoration: 'none', color: 'black', border: 'none' }} to="/Login">
                            <StyledLink style={({isActive}) => styleByActiveStatus(isActive)} path="/Login" class="mx-2">
                                <FontAwesomeIcon icon={faRightToBracket} />
                            </StyledLink>
                        </NavLink>
                    ) 
                    : 
                    (
                        <NavLink to="/Account" >
                            <StyledLink style={({isActive}) => styleByActiveStatus(isActive)} path="/Account" class="mx-2">
                                <FontAwesomeIcon icon={faUser} />
                            </StyledLink>
                        </NavLink>
                    )}

                        <StyledLink>
                            <FontAwesomeIcon icon={faCartShopping} />
                            {cartItems.length > 0 && (
                                <CartCircle>{cartItems.length}</CartCircle>
                            )}
                        </StyledLink>

                </div>
        </NavBarContents>
    </>
    );

};