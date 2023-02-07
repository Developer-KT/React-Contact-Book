import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header>
                <h1 className="logo">CONTY</h1>
                <ul className="nav-tabs">
                    <li className="tab">
                        <Link to='/'>Contacts</Link>
                    </li>
                    <li className="tab">
                        <Link to='/services'>Services</Link>
                    </li>
                    <li className="tab">
                        <Link to='/about'>About</Link>
                    </li>
                    <li className="tab">
                        <Link to='/contact-us' className='link'>Contact Us</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}