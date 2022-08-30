import { HeroSection } from './StyledComponents';
import heroImageRings from '../home-image-one.png';
import heroImageBracelet from '../home-image-two.jpg';
import HomeHeroImage from '../home-hero-image.jpg';
import { HeroImage } from './StyledComponents';
import { HeroText } from './StyledComponents';


export default function HomeHeroSection() {


    function noHoverStyling(e) {
        e.target.style.backgroundColor = "rgba(200, 200, 200, 0.5)";
        e.target.style.color = "black";
    };

    function hoverStyling(e) {
        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        e.target.style.color = "white";
    };


    return (
    <>
        <HeroSection>
            <HeroText onMouseOver={hoverStyling} onMouseLeave={noHoverStyling}>SHOP</HeroText>
            <HeroImage/>
        </HeroSection>
    </>
    );
};