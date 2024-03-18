import React, { useState } from 'react'
import { Settings } from './types'
import { Main } from './Main'

const App: React.FC = () => {
    const [settings, setSettings] = useState<Settings>({
        maxCount: 2,
        disappearTime: 5000,
        position: 0,
    })

    return (
        <div>
            <Main {...settings} />
        </div>
    )
}

export default App
