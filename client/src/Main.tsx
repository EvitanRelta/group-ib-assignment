import React from 'react'
import { NotificationList } from './NotificationList'
import { Settings } from './types'

export const Main: React.FC<Settings> = (settings) => {
    return (
        <div>
            <NotificationList {...settings} />
        </div>
    )
}
