import React from 'react';
import Logo from '../images/logo2.png'
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <a class="logo2" href="index.html"><img src={Logo} alt="#" /></a>
                            <div class="follow">
                                <p>reader will be distracted by the readable content of a page when looking at its layout. The
                          point of using Lorem Ipsum is that it has a more-or-less normal di</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <h3>Quick link</h3>
                            <ul class="link_icon">
                                <li class="active"> <a href="/"> <i class="fa fa-chevron-right"
                                    aria-hidden="false"></i>Home</a></li>
                                <li> <a href="/"> <i class="fa fa-chevron-right" aria-hidden="false"></i>Hbout </a></li>
                                <li> <a href="/"> <i class="fa fa-chevron-right" aria-hidden="false"></i>Currency</a></li>
                                <li> <a href="/"> <i class="fa fa-chevron-right" aria-hidden="false"></i>Exchange</a></li>
                                <li> <a href="/"> <i class="fa fa-chevron-right" aria-hidden="false"></i>Subscribe</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <h3>Instagram </h3>
                            <div class="follow">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                                <ul class="social_icon">
                                    <li> <a href="/"><i class="fa fa-facebook-f"></i></a></li>
                                    <li> <a href="/"><i class="fa fa-twitter"></i></a></li>
                                    <li> <a href="/"> <i class="fa fa-linkedin"></i></a></li>
                                    <li> <a href="/"><i class="fa fa-instagram" ></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <h3>Contact us</h3>
                            <ul class="location_icon">
                                <li><a href="/"><i class="fa fa-map-marker"></i></a>Reader will be dis<br />
                                    tracted by the reada
                       </li>
                                <li><a href="/"><i class="fa fa-envelope"></i></a>demo@gmail.com</li>
                                <li><a href="/"><i class="fa fa-volume-control-phone"></i></a>+01 102586954775
                       </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 offset-md-1">
                                <p>Copyright 2021 All Right Reserved By<a href="http://pattonunivercitygroup.com"> Patton UniverCity Group</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;