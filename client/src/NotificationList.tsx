import React, { useEffect, useState } from 'react'
import { NotificationPayload, Settings } from './types'
import { Notification } from './Notification'

export const NotificationList: React.FC<Settings> = ({ maxCount, position, disappearTime }) => {
    const [notifPayloads, setNotifPayloads] = useState<NotificationPayload[]>([])

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:9000/events')

        eventSource.onmessage = (event) => {
            const payload: NotificationPayload = JSON.parse(event.data)
            setNotifPayloads((prevPayloads) => [...prevPayloads, payload])
        }

        eventSource.onerror = (error) => {
            console.error('EventSource error:', error)
        }

        return () => {
            eventSource.close()
        }
    }, [])

    const handleRemoveItem = (messageId: string) => {
        setNotifPayloads((prevItems) => prevItems.filter((item) => item.msg_id !== messageId))
    }

    return (
        <div>
            {notifPayloads.slice(0, maxCount).map((payload) => (
                <Notification
                    key={payload.msg_id}
                    messageId={payload.msg_id}
                    content={payload.msg}
                    disappearTime={disappearTime}
                    onRemove={handleRemoveItem}
                />
            ))}
        </div>
    )
}
