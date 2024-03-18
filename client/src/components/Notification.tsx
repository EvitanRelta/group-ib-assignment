import { useContext, useEffect, useRef, useState } from 'react'
import { SettingsContext, MessagesContext } from '../contexts'

interface NotificationProps {
    messageId: string
    content: string
}

export const Notification: React.FC<NotificationProps> = ({ messageId, content }) => {
    const FADE_TIME_MS = 500
    const settingsState = useContext(SettingsContext)
    const messagesState = useContext(MessagesContext)
    const [fadeOut, setFadeOut] = useState(false)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setFadeOut(true)
            setTimeout(() => {
                messagesState.removeMessage(messageId)
            }, FADE_TIME_MS)
        }, settingsState.disappearTime)

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current)
            }
        }
    }, [])

    return (
        <div
            style={{
                opacity: fadeOut ? 0 : 1,
                transition: `opacity ${FADE_TIME_MS}ms`,
            }}
        >
            {content}
        </div>
    )
}
