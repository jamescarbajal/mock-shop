import styled from "styled-components";


export const AnnouncementsBar = styled.div`
    
`;

export const FooterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: fit-content;
    width: 100%;
    border-top: 1px solid black;
    background-image: linear-gradient(176deg, rgba(40, 70, 100, 1), rgba(50, 50, 70, 0.45));
`;

export const HomeContainer = styled.div`
    height: 100%;
    width: 100vw;
    display: flex;
    flex-flow: column;
    align-items: center;
`;

export const MainContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NavBarContainer = styled.div`
    position: sticky;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    box-shadow: 3px 3px 3px gray;
    padding: 5px;
`;

export const WelcomeBanner = styled.h1`
    font-size: 5vmin;
    color: blue;
`;