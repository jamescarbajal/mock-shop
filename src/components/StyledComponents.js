import styled from "styled-components";


export const FooterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: fit-content;
    width: 100%;
    border-top: 1px solid black;
`;

export const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: ;
`;

export const MainContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NavBarContainer = styled.div`
    align-self: flex-start;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid black;
    overflow: hidden;
    z-index: 100;

`;

export const WelcomeBanner = styled.h1`
    font-size: 5vmin;
    color: blue;
`;