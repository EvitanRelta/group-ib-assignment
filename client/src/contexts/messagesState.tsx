import React, { useState, createContext, useEffect } from 'react'
import { Message } from '../types'

interface MessagesContextType {
    messages: Message[]
    removeMessage: (messageId: string) => void
}

//@ts-ignore
export const MessagesContext = createContext<MessagesContextType>()
export const MessagesProvider: React.FC<any> = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:9000/events')

        eventSource.onmessage = (event) => {
            const newMessage: Message = JSON.parse(event.data)
            setMessages((messages) => [...messages, newMessage])
        }

        eventSource.onerror = (error) => {
            console.error('EventSource error:', error)
        }

        return () => {
            eventSource.close()
        }
    }, [])

    const removeMessage = (messageId: string) => {
        setMessages((messages) => messages.filter((x) => x.msg_id !== messageId))
    }

    return (
        <MessagesContext.Provider
            value={{
                messages,
                removeMessage,
            }}
        >
            {children}
        </MessagesContext.Provider>
    )
}
