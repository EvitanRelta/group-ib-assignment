import React, { useContext } from 'react'
import { Notification } from './Notification'
import { SettingsContext } from './contexts/settingsState'
import { MessagesContext } from './contexts/messagesState'

export const MainPage: React.FC = () => {
    const settingsState = useContext(SettingsContext)
    const messagesState = useContext(MessagesContext)
    return (
        <div>
            {messagesState.messages.slice(0, settingsState.maxCount).map((payload) => (
                <Notification
                    key={payload.msg_id}
                    messageId={payload.msg_id}
                    content={payload.msg_id}
                />
            ))}
        </div>
    )
}
