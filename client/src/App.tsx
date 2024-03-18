import React from 'react'
import { Main } from './Main'
import { SettingsProvider } from './settingsState'

const App: React.FC = () => {
    return (
        <SettingsProvider>
            <Main />
        </SettingsProvider>
    )
}

export default App
