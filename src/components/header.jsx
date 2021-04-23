import React from 'react';
import Logo from '../images/logo2.png';
import BTNH from '../images/btn_h.png';
import BAN from '../images/ban_img.png';
import Identicon from 'identicon.js';
import './header.css';

const Header = (props) => {
    return (
        <header>
            <div class="header">
                <div class="white_bg">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div class="full">
                                    <div class="center-desk">
                                        <div class="logo">
                                            <a href="index.html"><img src={Logo} alt="#" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <nav class="navigation navbar navbar-expand-md navbar-dark ">
                                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarsExample04">
                                        <ul class="navbar-nav mr-auto">
                                            <li class="nav-item active">
                                                <a class="nav-link" href="/"> Home </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">About</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="/tokenexchange">Exchange</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">News</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Contact Us</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#"> {props.account}</a>
                                            </li>
                                            {
                                                props.accounnt
                                                    ? <img
                                                        className="ml-2"
                                                        width="30"
                                                        height="30"
                                                        src={`data:image/png;base64,${new Identicon(props.account, 30).toString()}`}
                                                        alt=''
                                                    />
                                                    : <span></span>
                                            }
                                            <li class="nav-item d_none le_co">
                                                <a class="nav-link" href="#"><i class="fa fa-user" aria-hidden="true"></i> Login</a>
                                            </li>
                                            <li class="nav-item d_none le_co">
                                                <a class="nav-link" href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <section class="banner_main">
                        <div id="banner1" class="carousel slide" >
                            <div>
                                <div class="active">
                                    <div class="container-fluid">
                                        <div>
                                            <div class="row">
                                                <div class="col-md-12 col-lg-7">
                                                    <div class="text-bg">
                                                        <span>Progress & Success</span>
                                                        <h1>c u r r e n c y</h1>
                                                        <p>It is a long established fact that a reader will be distracted by the readable
                                                        It is a long established fact that a reader will be distracted by the readable </p>
                                                        <a class="read_more" href="#"><img src={BTNH} alt="#" /> Discover Now</a>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 col-lg-5">
                                                    <div class="text_img">
                                                        <figure><img src={BAN} alt="#" /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </header>
    )
}

export default Header;