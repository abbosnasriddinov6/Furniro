import React from 'react'
import { account, box, logo, love, search  } from '../../assets';
import { Link, NavLink } from 'react-router-dom';


import './Header.scss'
const Header = () => {
  return (
    <div className='whole'>
      <div className='container'>
      <div className='header'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='navbar'>
        <div className="links">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className='icons'>
          <img src={account} alt="" />
          <img src={search} alt="" />
          <img src={love} alt="" />
          <img src={box} alt="" />
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Header