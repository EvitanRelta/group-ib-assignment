export interface NotificationPayload {
    msg_id: string
    msg: string
    time: number
}

export interface Settings {
    maxCount: number
    position: number
    disappearTime: number
}
