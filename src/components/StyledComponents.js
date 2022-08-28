import styled from "styled-components";


export const AnnouncementsContainer = styled.div`
    width: 100%;
    height: fit-content;
    background-color: lightsteelblue;
    text-align: center;
    border-radius: 3px;
`;

export const CompanyLogo = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: inherit;
    font-weight: inherit;
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
    position: relative;
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

export const StyledLink = styled.h3`
    font-style: inherit;
    margin-left: 10px;
    margin-right: 5px;
    font-size: 20px;
`;

export const WelcomeBanner = styled.div`
    margin: 20px;
    font-size: 5vmin;
    color: blue;
`;