import { Link, NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { SlEnvolopeLetter } from 'react-icons/sl';
import { IoMdShuffle } from 'react-icons/io';
import { BsChevronDown } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
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
            </div>

            <ul className='navbar-menu'>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to='services'>Services</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to='product'>Product</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to='technology'>Technology</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to='about'>About <BsChevronDown /></NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to='client'>Client<BsChevronDown /></NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to='partner'>Partner</NavLink>
                </li>
            </ul>

            <ul className='left-menu'>
                <li>
                    <Link><AiOutlineHome /></Link>
                </li>
                <li>
                    <Link><SlEnvolopeLetter /></Link>
                </li>
                <li>
                    <Link><IoMdShuffle /></Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;