import { Link, NavLink } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    let activeStyle = {
        color: "#1f2e35",
        fontWeight: "500",
        transition: " 0.5s all ease-in-out",
    };

    return (
        <header className='header'>
            <Link className="logo" to="/">
                <img src="./images/aboutHeroLogo.png" alt="" className='logo' />
            </Link>

            <nav className={menuOpen ? "custom-navbar-mobile" : "custom-navbar"} onClick={() => setMenuOpen(false)}>
                <NavLink to='services' style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>Services</NavLink>
                <NavLink to='product' style={({ isActive }) =>
                    isActive ? activeStyle : undefined}>Product</NavLink>
                <NavLink to='technology' style={({ isActive }) =>
                    isActive ? activeStyle : undefined}>Technology</NavLink>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <NavLink to='about' style={({ isActive }) =>
                            isActive ? activeStyle : undefined}>
                            About <BsChevronDown className='down-icon' />
                        </NavLink>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                            <NavLink to='ourteam' style={({ isActive }) =>
                                isActive ? activeStyle : undefined}>
                                Our Team
                            </NavLink>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <NavLink to='client' style={({ isActive }) =>
                    isActive ? activeStyle : undefined}>Client<BsChevronDown className='down-icon' /></NavLink>
                <NavLink to='partner' style={({ isActive }) =>
                    isActive ? activeStyle : undefined}>Partner</NavLink>
            </nav>

            <div className='icons'>
                <Link><img src="./images/Union.svg" alt="" /></Link>
                <Link><img src="./images/mail.svg" alt="" /></Link>
                <Link><img src="./images/shuffle.svg" alt="" /></Link>
            </div>
            <div className='toggle-btn' onClick={() => setMenuOpen(!menuOpen)}>
                {
                    menuOpen ?
                        (<img className='menu-btn' src="./images/close.png" alt="" />)
                        :
                        (<img className='menu-btn' src="./images/open.png" alt="" />)
                }
            </div>

        </header>
    )
}

export default Navbar;