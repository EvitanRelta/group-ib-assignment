import React, { useContext } from 'react'
import { Notification } from '../components/Notification'
import { SettingsContext, MessagesContext } from '../contexts'
import './MainPage.css'

export const MainPage: React.FC = () => {
    const settingsState = useContext(SettingsContext)
    const messagesState = useContext(MessagesContext)

    // prettier-ignore
    const positionClass = ['top left', 'top right', 'bottom left', 'bottom right'][settingsState.position - 1]
    return (
        <div>
            <div className={`notif-container ${positionClass}`}>
                {messagesState.messages.slice(0, settingsState.maxCount).map((payload) => (
                    <Notification
                        key={payload.msg_id}
                        messageId={payload.msg_id}
                        content={payload.msg}
                    />
                ))}
            </div>
        </div>
    )
}
