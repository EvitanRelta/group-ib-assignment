import React, { Fragment, useContext } from 'react'
import { SettingsContext } from '../contexts'
import './SettingsPage.css'

export const SettingsPage: React.FC = () => {
    const settingsState = useContext(SettingsContext)
    return (
        <div className='settings-container'>
            <div className='settings-box'>
                <label className='settings-title'>Notification count</label>
                <div className='settings-input'>
                    <input
                        className='settings-input-box'
                        type='number'
                        value={settingsState.maxCount}
                        onChange={(e) => settingsState.setMaxCount(Number(e.target.value))}
                    />
                </div>
            </div>
            <div className='settings-box'>
                <label className='settings-title'>Notification position</label>
                <div className='settings-options'>
                    {[1, 2, 3, 4].map((i) => (
                        <Fragment key={i}>
                            <label>Position {i}</label>
                            <input
                                type='radio'
                                value={i}
                                checked={settingsState.position === i}
                                onChange={() => settingsState.setPosition(i)}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
            <div className='settings-box'>
                <label className='settings-title'>Notification disappear time</label>
                <div className='settings-input'>
                    <input
                        className='settings-input-box'
                        type='number'
                        value={settingsState.disappearTime}
                        onChange={(e) => settingsState.setDisappearTime(Number(e.target.value))}
                    />
                    <label>sec</label>
                </div>
            </div>
        </div>
    )
}
