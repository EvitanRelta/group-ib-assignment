import React, { useState, createContext, useEffect } from 'react'

interface SettingsContextType {
    maxCount: number
    position: number
    disappearTime: number
    setMaxCount: (value: number) => void
    setPosition: (value: number) => void
    setDisappearTime: (value: number) => void
}

const DEFAULT_COUNT = 3
const DEFAULT_POSITION = 2
const DEFAULT_DISAPPEAR_TIME = 5

//@ts-ignore
export const SettingsContext = createContext<SettingsContextType>()
export const SettingsProvider: React.FC<any> = ({ children }) => {
    const [maxCount, setMaxCount] = useState(() => {
        const storedMaxCount = localStorage.getItem('maxCount')
        return storedMaxCount ? parseInt(storedMaxCount, 10) : DEFAULT_COUNT
    })
    const [position, setPosition] = useState(() => {
        const storedPosition = localStorage.getItem('position')
        return storedPosition ? parseInt(storedPosition, 10) : DEFAULT_POSITION
    })
    const [disappearTime, setDisappearTime] = useState(() => {
        const storedDisappearTime = localStorage.getItem('disappearTime')
        return storedDisappearTime ? parseInt(storedDisappearTime, 10) : DEFAULT_DISAPPEAR_TIME
    })

    useEffect(() => {
        localStorage.setItem('maxCount', maxCount.toString())
    }, [maxCount])

    useEffect(() => {
        localStorage.setItem('position', position.toString())
    }, [position])

    useEffect(() => {
        localStorage.setItem('disappearTime', disappearTime.toString())
    }, [disappearTime])

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
