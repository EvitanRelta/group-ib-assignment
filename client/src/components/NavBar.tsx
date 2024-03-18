import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar: React.FC = () => (
    <nav>
        <div>Notification task</div>
        <ul>
            <li>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
                    Main
                </NavLink>
            </li>
            <li>
                <NavLink to='/settings' className={({ isActive }) => (isActive ? 'active' : '')}>
                    Settings
                </NavLink>
            </li>
        </ul>
    </nav>
)
