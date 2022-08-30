import styled from "styled-components";
import HomeHeroImage from '../hero-facebook.jpg';


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
    transform: translate(-50%, -65%);
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
    width: 100%;
    height: 100%;
    background-image: url(${HomeHeroImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
`;

export const HeroSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
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
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-height: 25px;
    z-index: 10;
`;

export const NavBarContents = styled.div`
    position: sticky;
    padding: 25px;
    height: 100%;
    max-height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    z-index: 10;
    box-shadow: 5px 1px 15px gray;
`;

export const StyledLink = styled.h3`
    display: flex;
    font-style: inherit;
    font-weight: inherit;
    color: inherit;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 16px;
`;

