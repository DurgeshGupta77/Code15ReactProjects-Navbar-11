import React, { useState, useRef, useEffect } from "react";
import { links, social } from "./data";
import logo from './logo.svg';
import { FaBars, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);
    return (
        <React.Fragment>
            <nav>
                <div className="navbar-header">
                    <div className="navbar-title">
                        <img src={logo} alt="Logo of the Company" />
                    </div>
                    <div className="navbar-toggle">
                        <button onClick={() => setIsShow(!isShow)}><FaBars className="icon" /></button>
                    </div>
                    <div className={`${isShow ? 'navbar-links show-items' : 'navbar-links'}`}>
                        {/* <div className={isShow ? 'navbar-links show-items' : 'navbar-links'}> */}
                        <ul>
                            {
                                links.map((link) => {
                                    const { id, url, text } = link;
                                    return <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="navbar-social-icons">
                        <ul>
                            {
                                social.map((soc) => {
                                    const { id, url, icon } = soc;
                                    return <li key={id}>
                                        <a href={url} target="_blank" rel="noreferrer">{icon}</a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;