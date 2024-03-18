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
        const handleStorageEvent = (event: StorageEvent) => {
            if (event.key === 'maxCount') {
                setMaxCount(parseInt(event.newValue || DEFAULT_COUNT.toString(), 10))
            } else if (event.key === 'position') {
                setPosition(parseInt(event.newValue || DEFAULT_POSITION.toString(), 10))
            } else if (event.key === 'disappearTime') {
                setDisappearTime(parseInt(event.newValue || DEFAULT_DISAPPEAR_TIME.toString(), 10))
            }
        }

        window.addEventListener('storage', handleStorageEvent)

        return () => {
            window.removeEventListener('storage', handleStorageEvent)
        }
    }, [])

    const updateMaxCount = (value: number) => {
        setMaxCount(value)
        localStorage.setItem('maxCount', value.toString())
        window.dispatchEvent(new Event('settingsUpdated'))
    }

    const updatePosition = (value: number) => {
        setPosition(value)
        localStorage.setItem('position', value.toString())
        window.dispatchEvent(new Event('settingsUpdated'))
    }

    const updateDisappearTime = (value: number) => {
        setDisappearTime(value)
        localStorage.setItem('disappearTime', value.toString())
        window.dispatchEvent(new Event('settingsUpdated'))
    }

    return (
        <SettingsContext.Provider
            value={{
                maxCount,
                position,
                disappearTime,
                setMaxCount: updateMaxCount,
                setPosition: updatePosition,
                setDisappearTime: updateDisappearTime,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}
