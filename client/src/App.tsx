import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MainPage, SettingsPage } from './pages'
import { SettingsProvider, MessagesProvider } from './contexts'
import { NavBar } from './components/NavBar'

export const App: React.FC = () => {
    return (
        <SettingsProvider>
            <MessagesProvider>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/settings' element={<SettingsPage />} />
                    </Routes>
                </Router>
            </MessagesProvider>
        </SettingsProvider>
    )
}
