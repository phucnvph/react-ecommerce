import '../../../dist/client/vendor/bootstrap/css/bootstrap.min.css';
import '../../../dist/client/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../../dist/client/fonts/iconic/css/material-design-iconic-font.min.css';
import '../../../dist/client/fonts/linearicons-v1.0.0/icon-font.min.css';
import '../../../dist/client/vendor/animate/animate.css';
import '../../../dist/client/vendor/css-hamburgers/hamburgers.min.css';
import '../../../dist/client/vendor/animsition/css/animsition.min.css';
import '../../../dist/client/vendor/select2/select2.min.css';
import '../../../dist/client/vendor/daterangepicker/daterangepicker.css';
import '../../../dist/client/vendor/slick/slick.css';
import '../../../dist/client/vendor/MagnificPopup/magnific-popup.css';
import '../../../dist/client/vendor/perfect-scrollbar/perfect-scrollbar.css';
import '../../../dist/client/css/main.css';
import '../../../dist/client/css/util.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container-menu-desktop">
                <div className="top-bar">
                    <div className="content-topbar flex-sb-m h-full container">
                        <div className="left-top-bar">
                            Free shipping for standard order over $100
                        </div>
                        <div className="right-top-bar flex-w h-full">
                            <a href="#" className="flex-c-m trans-04 p-lr-25">
                                Help &amp; FAQs
                            </a>
                            <a href="#" className="flex-c-m trans-04 p-lr-25">
                                My Account
                            </a>
                            <a href="#" className="flex-c-m trans-04 p-lr-25">
                                EN
                            </a>
                            <a href="#" className="flex-c-m trans-04 p-lr-25">
                                USD
                            </a>
                        </div>
                    </div>
                </div>
                <div className="wrap-menu-desktop">
                    <nav className="limiter-menu-desktop container">
                        <Link to="/" className="logo">
                            <img src={window.location.origin + "/dist/client/images/icons/logo-01.png"} alt="IMG-LOGO" />
                        </Link>
                        <div className="menu-desktop">
                            <ul className="main-menu">
                                <li className="active-menu">
                                    <Link to="/">Home</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/">Homepage 1</Link></li>
                                        <li><Link to="/">Homepage 2</Link></li>
                                        <li><Link to="/">Homepage 3</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li className="label1" data-label1="hot">
                                    <Link to="/cart">Cart</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="wrap-icon-header flex-w flex-r-m">
                            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                <i className="zmdi zmdi-search" />
                            </div>
                            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify={2}>
                                <i className="zmdi zmdi-shopping-cart" />
                            </div>
                            <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify={0}>
                                <i className="zmdi zmdi-favorite-outline" />
                            </a>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="wrap-header-mobile">
                <div className="logo-mobile">
                    <Link to="/"><img src="./dist/client/images/icons/logo-01.png" alt="IMG-LOGO" /></Link>
                </div>
                <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                        <i className="zmdi zmdi-search" />
                    </div>
                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify={2}>
                        <i className="zmdi zmdi-shopping-cart" />
                    </div>
                    <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify={0}>
                        <i className="zmdi zmdi-favorite-outline" />
                    </a>
                </div>
                <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                    <span className="hamburger-box">
                        <span className="hamburger-inner" />
                    </span>
                </div>
            </div>


            <div>
                <div className="menu-mobile">
                    <ul className="topbar-mobile">
                        <li>
                            <div className="left-top-bar">
                                Free shipping for standard order over $100
                            </div>
                        </li>
                        <li>
                            <div className="right-top-bar flex-w h-full">
                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    Help &amp; FAQs
                                </a>
                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    My Account
                                </a>
                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    EN
                                </a>
                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    USD
                                </a>
                            </div>
                        </li>
                    </ul>
                    <ul className="main-menu-m">
                        <li className="active-menu">
                            <Link to="/">Home</Link>
                            <ul className="sub-menu">
                                <li><Link to="/">Homepage 1</Link></li>
                                <li><Link to="/">Homepage 2</Link></li>
                                <li><Link to="/">Homepage 3</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li className="label1" data-label1="hot">
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
                    <div className="container-search-header">
                        <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                            <img src="./dist/client/images/icons/icon-close2.png" alt="CLOSE" />
                        </button>
                        <form className="wrap-search-header flex-w p-l-15">
                            <button className="flex-c-m trans-04">
                                <i className="zmdi zmdi-search" />
                            </button>
                            <input className="plh3" type="text" name="search" placeholder="Search..." />
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;