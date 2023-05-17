import { Link, NavLink } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='header'>
            <Link className="logo" to="/">
                <img src="./images/aboutHeroLogo.png" alt="" className='logo' />
            </Link>

            <nav className={menuOpen ? "custom-navbar-mobile" : "custom-navbar"} onClick={() => setMenuOpen(false)}>
                <NavLink to='services' className={({ isActive }) => (isActive ? 'linkActive' : "")}>Services</NavLink>
                <NavLink to='product' className={({ isActive }) => isActive ? "linkActive" : ""}>Product</NavLink>
                <NavLink to='technology' className={({ isActive }) => isActive ? "linkActive" : ""}>Technology</NavLink>
                <NavLink to='ourteam' className={({ isActive }) => isActive ? "linkActive" : ""}>Our Team</NavLink>
                <NavLink to='about' className={({ isActive }) => isActive ? "linkActive" : ""}>About </NavLink>
                <NavLink to='client' className={({ isActive }) => isActive ? "linkActive" : ""}>Client<BsChevronDown className='down-icon' /></NavLink>
                <NavLink to='partner' className={({ isActive }) => isActive ? "linkActive" : ""}>Partner</NavLink>
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