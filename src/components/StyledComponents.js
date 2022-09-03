import styled from "styled-components";
import HomeHeroImage from '../hero-facebook.jpg';


export const AnnouncementsContainer = styled.div`
    position: absolute;
    width: 100%;
    height: fit-content;
    background-color: lightsteelblue;
    text-align: center;
    border-radius: 5px;
    padding: 3px;
    margin: 0;
`;

export const Banner = styled.div`
    margin: 20px;
    font-size: 5vmin;
    color: blue;
`;

export const CardButton = styled.button`
    font-size: 12px;
    font-weight: 700;
    color: rgba( 80, 80, 80, 1);
    height: 30px;
    width: fit-content;
    padding: 4px;
    border: 1px gray;
    border-radius: 5px;
    box-shadow: 3px 5px 5px lightgray;
    background-color: rgba( 200, 200, 255, 0.2);
`;

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    height: fit-content;
    width: 90vw;
    margin-top: 20px;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-self: flex-end;
    font-weight: 600;
    margin-top: 10px;
    text-align: center;
`;

export const CardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid gray;
    box-shadow: 0px 4px 8px gray;
    border-radius: 10px;
    padding: 10px;
    min-width: 300px;
    max-width: 300px;
    height: auto;
    max-height: 300px;
    min-height: 300px;
    margin: 10px;
    overflow: hidden;
`;

export const CartCircle = styled.div`
    position: absolute;
    font-size: 15px;
    top: 15px;
    right: 0;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    border: 1px solid gray;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    padding: 1px;
    box-sizing: content-box;
`;

export const CompanyLogo = styled.h1`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2vmin 3vw;
    font-weight: inherit;
    width: fit-content;
    height: 100%;
    max-width: 650px;
    padding-bottom: 10px;
`;

export const FooterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: fit-content;
    width: 100%;
    padding-top: 20px;
    border-top: 1px solid black;
    background-image: linear-gradient(176deg, rgba(40, 70, 100, 1), rgba(50, 50, 70, 0.45));
`;

export const HamburgerContainer = styled.div`
    position: absolute;
    top:0;
    left: 0;
    padding: 10px;
    padding-left: 15px;
    height: 100%;
    width: fit-content;
    overflow: hidden;
`;

export const HeroImage = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-image: url(${HomeHeroImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 70%;
    z-index: -10;
`;

export const HeroSection = styled.div`
    position: relative;
    margin-top: 0;
    width: 100vw;
    height: 100vh;
    background-color: gray;
    z-index: -10;
`;

export const HeroText = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    text-align: left;
    transform: translate(-50%, -50%);
    min-width: fit-content;
    max-width: 100vw;
    min-height: fit-content;
    max-height: 100vh;
    font-weight: 600;
    font-size: 16vw;
    line-height: 28vh;
    border: none;
    box-sizing: content-box;
    padding: 0;
    margin: 0;
    color: rgba(0, 0, 0, 0.6);
    background-color: rgba(0, 0, 0, 0);
`;

export const HomeContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: column;
    z-index: 1;
`;

export const MainContainer = styled.div`
    position: relative;
    height: fit-content;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MiniHeader = styled.div`
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
`;

export const ModalCloseButton = styled.button`
    font-size: 20px;
    font-weight: 700;
    position: sticky;
    float: right;
    top: 0;
    right: 0;
    height: 30px;
    width: 30px;
    box-sizing: content-box;
    padding-bottom: 5px;
    border: 1px gray;
    border-radius: 10px;
    box-shadow: 2px 2px 5px dimgrey;
    background-color: transparent;
    z-index: 1;
`;

export const ModalImage = styled.img`
    position: relative;
    height: auto;
    width: auto;
    max-width: 90%;
    max-height: 550px;
    padding: 15px;
`;

export const ModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 500px;
    height: fit-content;
    width: 100%;
    max-height: 90%;
    max-width: 100%;
    text-align: left;
`;

export const ModalWrapperContents = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 1000px;
    padding-left: 30px;
    padding-right: 30px;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 20px;
`;

export const NavBarContainer = styled.div`
    position: sticky;
    top: 0;
    margin-top: 30px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: 0;
    z-index: 1001;
`;

export const NavBarContents = styled.div`
    position: relative;
    padding: 10px;
    height: fit-content;
    max-height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    box-shadow: 5px 1px 8px gray;
    background-color: rgba(255, 255, 255, 0.8);
`;

export const ProductImage = styled.img`
height: 100%;
width: auto;
max-width: 150px;
`;

export const ShopContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const StyledLink = styled.button`
    width: 60px;
    height: 40px;
    background-color: transparent;
    border: none;
    padding: 0;
    box-sizing: content-box;
`;

