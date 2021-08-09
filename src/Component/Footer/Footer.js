import React from 'react';
import './Footer.css';



const Footer = () => {
    return (
        <footer class="site-footer mt-5 pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p class="text-justify">At HomeLane, we believe that interior design is more than great functionality and beautiful aesthetics. We aim to make your home interiors a reflection of your personality. Your home should be something that you and your family take pride in and love to spend time in. Our dedicated home interior designers work with you tirelessly to tie your style with their design expertise, creating the perfect interior design plan. They will also ensure that the plan is executed using the materials of the highest standards. In addition to great interior design ideas, you can expect our unwavering support and service for years to come because all our products come with up to 10 year warranty</p>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul class="footer-links">
                            <li><a href="#">Space Saving Furniture</a></li>
                            <li><a href="#">Modular kitchen Design</a></li>
                            <li><a href="#">Waredrobe Design</a></li>
                            <li><a href="#">Modular Bedroom Design</a></li>
                            <li><a href="#">Modular Rooftop Design</a></li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Contribute</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <hr />

                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                        <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12 d-flex">
                           
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;