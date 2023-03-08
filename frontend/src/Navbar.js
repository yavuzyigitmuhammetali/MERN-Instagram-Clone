import React from 'react';
import {useMediaQuery} from 'react-responsive';
import big_logo from "./photos/Instagram_logo.svg.png";
import small_logo from "./photos/87390.png";
import message_icon from "./photos/icons8-facebook-messenger-256.png"
import test_pp_icon from "./photos/1.jpg"
import navbar_icon from "./photos/navigation-bar-icon-20.jpg"
import NavbarItem from "./NavbarItem";
import {Link} from "react-router-dom";

function Navbar() {
    const largePage = useMediaQuery({query: '(min-width: 1420px)'})
    const middlePage = useMediaQuery({query: '(max-width: 1420px)'})
    return (
        <div>
            <div className="instagram-logo">
                <Link to="/">
                <div className="main-logo">
                    {largePage && (
                        <img className="big-logo" src={big_logo} alt="logo"/>
                    )}
                    {middlePage && (
                        <img className="small-logo" src={small_logo} alt="logo"/>
                    )}
                </div></Link>
            </div>
            <div className="nav-items">
                <Link to="/">
                    <NavbarItem name={"Home"}>
                        <path
                            d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                            fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
                        </path>
                    </NavbarItem>
                </Link>
                <Link to="/">
                <NavbarItem className="navbar-mobile-custom" name="Search">
                    <path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor"
                          strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.511"
                          x2="22" y1="16.511" y2="22"></line>
                </NavbarItem></Link>
                <Link to="/">
                <NavbarItem name="Explore">
                    <polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                             stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
                    <polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon>
                    <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2"></circle>
                </NavbarItem></Link>
                <Link to="/">
                <NavbarItem name="Reels">
                    <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002"
                          y2="7.002"></line>
                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="13.504"
                          x2="16.362" y1="2.001" y2="7.002"></line>
                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.207"
                          x2="10.002" y1="2.11" y2="7.002"></line>
                    <path
                        d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path
                        d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                        fillRule="evenodd"></path>
                </NavbarItem></Link>

                <Link to="/direct/inbox/"><div id="message"><div className="red-badge" style={{zIndex:"10"}}>N!</div><img src={message_icon} alt="logo"/>Messages</div></Link>
                    <Link to="/">
                    <NavbarItem className="navbar-mobile-custom" name="Notifications">
                    <path
                        d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                </NavbarItem></Link>
                <Link to="/">
                <NavbarItem name="Create">
                    <path
                        d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545"
                          x2="17.455" y1="12.001" y2="12.001"></line>
                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003"
                          x2="12.003" y1="6.545" y2="17.455"></line>
                </NavbarItem></Link>
                <Link to="/">
                <div><img className="profile_photo_small" src={test_pp_icon} alt="logo"/>Profile</div></Link>
                <Link to="/">
                <div className="navbar-mobile-custom" style={{position:"absolute", bottom:"50px"}} ><img src={navbar_icon} alt="logo" />More</div></Link>
            </div>

        </div>
    );
}

export default Navbar;