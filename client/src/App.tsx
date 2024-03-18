import React from 'react'
import { NotificationList } from './NotificationList'

const App: React.FC = () => {
    return (
        <div>
            <NotificationList maxCount={2} disappearTime={5000} position={0} />
        </div>
    )
}

export default App
