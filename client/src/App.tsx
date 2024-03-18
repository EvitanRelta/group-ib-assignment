import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MainPage } from './MainPage'
import { SettingsPage } from './SettingsPage'
import { SettingsProvider } from './contexts/settings'
import { NavBar } from './NavBar'

export const App: React.FC = () => {
    return (
        <SettingsProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/settings' element={<SettingsPage />} />
                </Routes>
            </Router>
        </SettingsProvider>
    )
}
