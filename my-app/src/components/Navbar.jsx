import { Link, NavLink } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='header'>

            <Link className="logo" to="/">
                <div className="big-text">
                    <span style={{ color: "#85171a" }}>D</span>
                    <span style={{ color: "#dc2025" }}>S</span>
                    <span style={{ color: "#feba08" }}>I</span>
                </div>
                <div className="small-texts">
                    <span style={{ fontWeight: 500 }}>dwidasa</span>
                    <span style={{ fontWeight: 600 }}>samsara</span>
                    <span style={{ fontWeight: 700 }}>indonesia</span>
                </div>
            </Link>

            <nav className={menuOpen ? "custom-navbar-mobile" : "custom-navbar"} onClick={() => setMenuOpen(false)}>
                <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to='services'>Services</NavLink>
                <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to='product'>Product</NavLink>
                <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to='technology'>Technology</NavLink>
                <NavLink className={`about-dropdown ${({ isActive }) => isActive ? "linkActive" : ""}`} to='about'>
                    About <BsChevronDown className='down-icon' />
                    <div className="about-dropdown-menu">
                        <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to='ourteam'>Our Team</NavLink>
                    </div>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to='client'>Client<BsChevronDown className='down-icon' /></NavLink>
                <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to='partner'>Partner</NavLink>
            </nav>

            <div className='icons'>
                <Link><img src="./images/home.png" alt="" /></Link>
                <Link><img src="./images/mail.png" alt="" /></Link>
                <Link><img src="./images/shuffle.png" alt="" /></Link>
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