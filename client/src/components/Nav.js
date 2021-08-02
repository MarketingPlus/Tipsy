import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/tipsy-logo-white.svg';
import Home from '../components/pages/Home'

const styles = {
    nav: {
        position: "sticky",
        zIndex: 1,
        backgroundColor:"#2F3439",
    },
    logo: {
        width: "auto",
        height: "30px"
    },
    links: {
        marginRight: 10,
        color: "#fff"
    }
};

function Nav() {
    const location = useLocation();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)
    
    return (
        <nav className='navbar fixed-top navbar-expand-lg navbar-light' style={styles.nav}>
        <a
            className='navbar-brand' href={Home}>
            
            <img
                    src={logo}
                    alt="logo"
                    loading="lazy"
                    style={styles.logo}
                    />
        </a>
        
        <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed ? true : false}
                aria-label="Toggle navigation"
            onClick={handleNavCollapse}>
            
            <span
                className="navbar-toggler-icon" />
        </button>
        
        <div
            className={`${isNavCollapsed ? 'collapse' : ''} justify-content-end navbar-collapse`}
            id="navbarSupportedContent">
            
            <ul className="navbar-nav">
                <li className="nav-item" style={styles.links}>
                        <Link to="/"
                            className={location.pathname === "/" ? 'nav-item nav-link active text-primary' : 'nav-item nav-link text-white'}>
                                Home
                        </Link>

                </li>
                
                <li className="nav-item" style={styles.links}>
                        <Link to="/login"
                            className={location.pathname === "/login" ? 'nav-item nav-link active text-primary' : 'nav-item nav-link text-white'}>
                                Account
                        </Link>
                </li>
                {/* <li className="nav-item" style={styles.links}>
                  <Link className={location.pathname === "/login" ? 'nav-item nav-link active' : 'nav-item nav-link'}> <LogoutButton /></Link>
                </li> */}
            </ul>
        </div>    
        </nav>
    )
}

export default Nav;