import React, { useContext, useEffect, useState } from 'react'
import { Message } from './types'
import { Notification } from './Notification'
import { SettingsContext } from './contexts/settingsState'

export const MainPage: React.FC = () => {
    const settingsState = useContext(SettingsContext)
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:9000/events')

        eventSource.onmessage = (event) => {
            const payload: Message = JSON.parse(event.data)
            setMessages((prevPayloads) => [...prevPayloads, payload])
        }

        eventSource.onerror = (error) => {
            console.error('EventSource error:', error)
        }

        return () => {
            eventSource.close()
        }
    }, [])

    const handleRemoveItem = (messageId: string) => {
        setMessages((prevItems) => prevItems.filter((item) => item.msg_id !== messageId))
    }

    console.log(messages)

    return (
        <div>
            {messages.slice(0, settingsState.maxCount).map((payload) => (
                <Notification
                    key={payload.msg_id}
                    messageId={payload.msg_id}
                    content={payload.msg}
                    onRemove={handleRemoveItem}
                />
            ))}
        </div>
    )
}
