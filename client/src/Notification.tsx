import { useContext, useEffect, useRef, useState } from 'react'
import { SettingsContext } from './contexts/settings'

interface NotificationProps {
    messageId: string
    content: string
    onRemove: (id: string) => void
}

export const Notification: React.FC<NotificationProps> = ({ messageId, content, onRemove }) => {
    const FADE_TIME_MS = 500
    const settings = useContext(SettingsContext)
    const [fadeOut, setFadeOut] = useState(false)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setFadeOut(true)
            setTimeout(() => {
                onRemove(messageId)
            }, FADE_TIME_MS)
        }, settings.disappearTime)

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
