package com.rizzzle.services;

import com.rizzzle.models.UserSettings;
import com.rizzzle.repositories.UserSettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SettingsService {

    @Autowired
    private UserSettingsRepository settingsRepository;

    public UserSettings updateSettings(UserSettings settings) {
        // Logic to update user settings
        return settingsRepository.save(settings);
    }

    public Optional<UserSettings> getUserSettings(Long userId) {
        // Logic to fetch user settings
        return settingsRepository.findByUserId(userId);
    }
}
