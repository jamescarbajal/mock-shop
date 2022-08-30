import { HeroSection } from './StyledComponents';
import heroImageRings from '../home-image-one.png';
import heroImageBracelet from '../home-image-two.jpg';
import HomeHeroImage from '../home-hero-image.jpg';
import { HeroImage } from './StyledComponents';


export default function HomeHeroSection() {


    return (
    <>
        <HeroSection>
            <div class="h-100 w-100">
                <HeroImage/>
            </div>
        </HeroSection>
    </>
    );
};