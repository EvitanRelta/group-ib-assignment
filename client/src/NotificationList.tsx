import React, { useEffect, useState } from 'react'
import { NotificationPayload } from './types'
import { Notification } from './Notification'

interface NotificationListProps {
    maxCount: number
    position: number
    disappearTime: number
}

export const NotificationList: React.FC<NotificationListProps> = ({
    maxCount,
    position,
    disappearTime,
}) => {
    const [notifPayloads, setNotifPayloads] = useState<NotificationPayload[]>([])

    const handleRemoveItem = (messageId: string) => {
        setNotifPayloads((prevItems) => prevItems.filter((item) => item.msg_id !== messageId))
    }

    return (
        <div>
            {notifPayloads.map((payload) => (
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
