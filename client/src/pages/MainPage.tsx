import React, { useContext } from 'react'
import { Notification } from '../components/Notification'
import { SettingsContext, MessagesContext } from '../contexts'

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
