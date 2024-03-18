import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MainPage } from './MainPage'
import { SettingsPage } from './SettingsPage'
import { SettingsProvider } from './contexts/settingsState'
import { NavBar } from './NavBar'
import { MessagesProvider } from './contexts/messagesState'

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
