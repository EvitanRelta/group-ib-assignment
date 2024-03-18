import React, { useContext } from 'react'
import { SettingsContext } from './contexts/settings'

export const SettingsPage: React.FC = () => {
    const settings = useContext(SettingsContext)
    return (
        <div>
            <div>
                <label>Notification count</label>
                <input
                    type='number'
                    value={settings.maxCount}
                    onChange={(e) => settings.setMaxCount(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Notification position</label>
                <div>
                    {[1, 2, 3, 4].map((i) => (
                        <label key={i}>
                            <input
                                type='radio'
                                value={i}
                                checked={settings.position === i}
                                onChange={() => settings.setPosition(i)}
                            />
                            Position {i}
                        </label>
                    ))}
                </div>
            </div>
            <div>
                <label>Notification disappear time</label>
                <input
                    type='number'
                    value={settings.disappearTime}
                    onChange={(e) => settings.setDisappearTime(Number(e.target.value) * 1000)}
                />
                <span>sec</span>
            </div>
        </div>
    )
}
