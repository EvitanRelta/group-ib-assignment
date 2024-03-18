import React from 'react'
import { NotificationList } from './NotificationList'

const App: React.FC = () => {
    return (
        <div>
            <NotificationList maxCount={3} disappearTime={2000} position={0} />
        </div>
    )
}

export default App
