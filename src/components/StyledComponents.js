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
    height: 50px;
    border: 1px solid black;
    overflow: hidden;
    z-index: 100;
`;

export const WelcomeBanner = styled.h1`
    font-size: 5vmin;
    color: blue;
`;