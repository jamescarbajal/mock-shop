import styled from "styled-components";
import HomeHeroImage from '../home-hero-image.jpg';


export const AnnouncementsContainer = styled.div`
    width: 100%;
    height: fit-content;
    background-color: lightsteelblue;
    text-align: center;
    border-radius: 3px;
`;

export const Banner = styled.div`
    margin: 20px;
    font-size: 5vmin;
    color: blue;
`;

export const CompanyLogo = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
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

export const HeroImage = styled.div`
    width: auto;
    height: 120%;
    background-image: url(${HomeHeroImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    z-index: 1;
`;

export const HeroSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 90vh;
    background-color: gray;
    overflow: hidden;
    z-index: 1;
`;

export const HomeContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: column;
    align-items: center;
`;

export const MainContainer = styled.div`
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
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

export const NavBarContents = styled.div`
    position: relative;
    padding: 10px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    z-index: 1;
`;

export const StyledLink = styled.h3`
    position: inherit;
    align-self: center;
    display: flex;
    font-style: inherit;
    font-weight: inherit;
    color: inherit;
    margin-left: 10px;
    margin-right: 5px;
    font-size: inherit;
    color: inherit;
`;

