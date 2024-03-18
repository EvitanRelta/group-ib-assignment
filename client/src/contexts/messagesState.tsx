import React, { useState, createContext, useEffect } from 'react'
import { Message } from '../types'

interface MessagesContextType {
    messages: Message[]
    removeMessage: (messageId: string) => void
}

//@ts-ignore
export const MessagesContext = createContext<MessagesContextType>()
export const MessagesProvider: React.FC<any> = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>(() => {
        const storedMessages = localStorage.getItem('messages')
        return storedMessages ? JSON.parse(storedMessages) : []
    })

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:9000/events')

        eventSource.onmessage = (event) => {
            const newMessage: Message = JSON.parse(event.data)
            setMessages((messages) => {
                const updatedMessages = [...messages, newMessage]
                localStorage.setItem('messages', JSON.stringify(updatedMessages))
                return updatedMessages
            })
        }

        eventSource.onerror = (error) => {
            console.error('EventSource error:', error)
        }

        return () => {
            eventSource.close()
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(messages))
    }, [messages])

    const removeMessage = (messageId: string) => {
        setMessages((messages) => {
            const updatedMessages = messages.filter((x) => x.msg_id !== messageId)
            localStorage.setItem('messages', JSON.stringify(updatedMessages))
            return updatedMessages
        })
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
