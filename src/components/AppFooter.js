import { FooterContainer } from './StyledComponents'

export default function AppFooter() {

    return (
        <FooterContainer>
                <footer class="site-footer">
                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12 col-md-9 px-5">
                            <h6 style={{ fontSize: 20, marginLeft: 20 }}>ABOUT</h6>
                            <p>Brother Ryan Shop is... </p>
                        </div>

                        <div class="col-12 col-md-3 px-5">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li><a href="./Order.html" target="_blank">ORDER</a></li>
                                <li><a href="./FAQ.html" target="_blank">FAQ</a></li>
                                <li><a href="./Menu.html" target="_blank">MENU</a></li>
                                <li><a href="./Contact.html" target="_blank">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>

                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="d-flex flex-row justify-content-center align-items-center">
                            <p class="copyright-text text-center">
                                Copyright &copy; 2022 All Rights Reserved by <i>Brother Ryan Shop, LLC</i>
                            </p>
                            </div>

                        </div>
                    </div>
                </footer>
        </FooterContainer>
    );
};