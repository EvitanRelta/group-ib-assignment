import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar: React.FC = () => (
    <nav>
        <div className='nav-container'>
            <div className='nav-title'>Notification task</div>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'nav-tab active' : 'nav-tab')}>
                Main
            </NavLink>
            <NavLink
                to='/settings'
                className={({ isActive }) => (isActive ? 'nav-tab active' : 'nav-tab')}
            >
                Settings
            </NavLink>
        </div>
    </nav>
)
