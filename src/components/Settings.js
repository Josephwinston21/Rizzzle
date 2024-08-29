import React, { useState } from 'react';

const Settings = ({ updateSettings }) => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [privacyMode, setPrivacyMode] = useState(false);

    const handleSaveSettings = () => {
        const settings = {
            notificationsEnabled,
            privacyMode
        };
        updateSettings(settings);
        alert('Settings saved successfully!');
    };

    return (
        <div className="settings">
            <h3>App Settings</h3>
            <label>
                Enable Notifications:
                <input
                    type="checkbox"
                    checked={notificationsEnabled}
                    onChange={(e) => setNotificationsEnabled(e.target.checked)}
                />
            </label>
            <label>
                Privacy Mode:
                <input
                    type="checkbox"
                    checked={privacyMode}
                    onChange={(e) => setPrivacyMode(e.target.checked)}
                />
            </label>
            <button onClick={handleSaveSettings}>Save Settings</button>
        </div>
    );

    const SettingsPage = () => {
        const userId = 1; // Retrieve this from your authentication context or state

        return (
            <div>
                <h1>Settings</h1>
                <UserSettings userId={userId} />
            </div>
        );
    };
}

export default Settings;
