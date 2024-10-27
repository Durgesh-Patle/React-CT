import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='nav'>
            {/* <div className='nav-logo'>
                <h2>Logo</h2>
            </div> */}
            <div className='nav-part'>
                <Link className='link' to='./'>Home</Link>
                {/* <Link to='./about'>About</Link> */}
                {/* <Link to='./contact'>Contact</Link> */}
                <Link className='link' to='./cart'>Cart</Link>
            </div>
        </div>
    )
}

export default NavBar
