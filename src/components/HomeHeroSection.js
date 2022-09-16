import { HeroSection } from './StyledComponents';
import { HeroImage } from './StyledComponents';
import { HeroText } from './StyledComponents';


export default function HomeHeroSection() {


    function noHoverStyling(e) {
        e.target.style.color = "rgba(0, 0, 0, 0.6)";
    };

    function hoverStyling(e) {
        e.target.style.color = "rgba(255, 255, 255, 0.6";
    };


    return (
    <>
        <HeroSection>
            <HeroText onMouseOver={hoverStyling} onMouseLeave={noHoverStyling}>BROTHER RYAN SHOP</HeroText>
            <HeroImage/>
        </HeroSection>
    </>
    );
};