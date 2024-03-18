import { useContext, useEffect, useRef, useState } from 'react'
import { SettingsContext, MessagesContext } from '../contexts'
import './Notification.css'

interface NotificationProps {
    messageId: string
    content: string
}

export const Notification: React.FC<NotificationProps> = ({ messageId, content }) => {
    const FADE_TIME_MS = 300
    const settingsState = useContext(SettingsContext)
    const messagesState = useContext(MessagesContext)
    const [fadeOut, setFadeOut] = useState(false)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const fadeOutAndRemoveMessage = () => {
        if (timerRef.current) clearTimeout(timerRef.current)
        setFadeOut(true)
        setTimeout(() => {
            messagesState.removeMessage(messageId)
        }, FADE_TIME_MS)
    }

    const stopTimer = () => {
        if (timerRef.current) clearTimeout(timerRef.current)
    }
    const startTimer = () => {
        timerRef.current = setTimeout(fadeOutAndRemoveMessage, settingsState.disappearTime * 1000)
    }

    useEffect(() => {
        startTimer()

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current)
            }
        }
    }, [])

    return (
        <div
            className='notif-box'
            style={{
                opacity: fadeOut ? 0 : 1,
                transition: `opacity ${FADE_TIME_MS}ms`,
            }}
            onMouseEnter={stopTimer}
            onMouseLeave={startTimer}
        >
            <div className='notif-text'>{content}</div>
            <button className='close-button' onClick={fadeOutAndRemoveMessage}>
                <svg className='cross-icon' viewBox='0 0 100 100'>
                    <rect x='46' y='10' width='8' height='80' transform='rotate(45 50 50)' />
                    <rect x='46' y='10' width='8' height='80' transform='rotate(-45 50 50)' />
                </svg>
            </button>
        </div>
    )
}
