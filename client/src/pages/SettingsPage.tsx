import React, { useContext } from 'react'
import { SettingsContext } from '../contexts'

export const SettingsPage: React.FC = () => {
    const settingsState = useContext(SettingsContext)
    return (
        <div>
            <div>
                <label>Notification count</label>
                <input
                    type='number'
                    value={settingsState.maxCount}
                    onChange={(e) => settingsState.setMaxCount(Number(e.target.value))}
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
                                checked={settingsState.position === i}
                                onChange={() => settingsState.setPosition(i)}
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
                    value={settingsState.disappearTime}
                    onChange={(e) => settingsState.setDisappearTime(Number(e.target.value) * 1000)}
                />
                <span>sec</span>
            </div>
        </div>
    )
}
