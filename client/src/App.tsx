import React from 'react'
import { NotificationList } from './NotificationList'
import { Settings } from './types'

const App: React.FC<Settings> = () => {
    return (
        <div>
            <NotificationList maxCount={2} disappearTime={5000} position={0} />
        </div>
    )
}

export default App
