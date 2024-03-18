import React, { useState, createContext } from 'react'

interface SettingsContextType {
    maxCount: number
    position: number
    disappearTime: number
    setMaxCount: (value: number) => void
    setPosition: (value: number) => void
    setDisappearTime: (value: number) => void
}

//@ts-ignore
export const SettingsContext = createContext<SettingsContextType>()
export const SettingsProvider: React.FC<any> = ({ children }) => {
    const [maxCount, setMaxCount] = useState(2)
    const [position, setPosition] = useState(0)
    const [disappearTime, setDisappearTime] = useState(5000)

    return (
        <SettingsContext.Provider
            value={{
                maxCount,
                position,
                disappearTime,
                setMaxCount,
                setPosition,
                setDisappearTime,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}
