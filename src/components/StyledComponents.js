import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: row column;
    justify-content: center;
    align-items: center;
`;

export const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

export const NavBarContainer = styled.div`
    align-self: flex-start;
    width: 100vw;
    min-height: 50px;
    border: 2px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    background: rgb(0, 0, 0, 0.4) url('/navbar-background.jpg') no-repeat center cover;
    overflow: hidden;
    z-index: 100;
`;

export const WelcomeBanner = styled.h1`
    font-size: 5vmin;
    color: blue;
`;