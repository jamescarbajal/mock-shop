// import { ThemeToggle } from './ThemeToggle';
import NavBarLinks from './NavBarLinks';
import AnnouncementsBar from './AnnouncementsBar'
import { HamburgerContainer, NavBarContainer } from './StyledComponents';
import HamburgerMenu from '../HamburgerMenu';

export default function AppHeader() {


    return (
        <>  
            <AnnouncementsBar />
            <NavBarContainer>
                <NavBarLinks />
            </NavBarContainer>
        </>
    );
};