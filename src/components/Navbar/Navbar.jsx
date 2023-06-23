import React from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'
import { Input, ButtonBorder } from '../../components'
import ChromeIcon from '../../assets/color-hunt-icon-chrome.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={Logo} alt="" />
        <Input />
        <ButtonBorder>
            <a href='#' title='Add to Chrome' className='btnAddToChrome'>
                <img src={ChromeIcon} alt="Chrome icon" />
                <span>Add to Chrome</span>
            </a>
        </ButtonBorder>
    </nav>
  )
}

export default Navbar