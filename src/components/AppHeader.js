// import { ThemeToggle } from './ThemeToggle';
// import { NavBarLinks } from './NavBarLinks';
import NavBarLinks from './NavBarLinks';
import { NavBarContainer } from './StyledComponents';

export default function AppHeader() {


    return (
        <>
            <div>Current specials and/or facebook live timer countdown</div>
            <NavBarContainer>
                <div class="Navbar-background">
                    <div class="Navbar-content">
                        <NavBarLinks />
                    </div>
                </div>
            </NavBarContainer>
        </>
    );
};