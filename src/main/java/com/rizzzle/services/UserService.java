package com.rizzzle.services;

import com.rizzzle.models.UserSettings;
import com.rizzzle.repositories.UserSettingsRepository;
import com.rizzzle.models.User;
import com.rizzzle.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserSettingsRepository userSettingsRepository;
    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        // Logic to create a new user
        return userRepository.save(user);
    }

    public Optional<User> getUserById(Long id) {
        // Logic to fetch user by ID
        return userRepository.findById(id);
    }

    public List<User> getAllUsers() {
        // Logic to fetch all users
        return userRepository.findAll();
    }

    public User updateUser(User user) {
        // Logic to update user details
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        // Logic to delete user
        userRepository.deleteById(id);
    }

    public boolean checkEmailExists(String email) {
        // Logic to check if email already exists
        return userRepository.existsByEmail(email);
    }
    public UserSettings getUserSettings(Long userId) {
        return userSettingsRepository.findByUserId(userId);
    }

    public UserSettings updateUserSettings(Long userId, boolean receiveNotifications, String themePreference, String languagePreference) {
        UserSettings settings = userSettingsRepository.findByUserId(userId);
        if (settings == null) {
            settings = new UserSettings(userId, receiveNotifications, themePreference, languagePreference);
        } else {
            settings.setReceiveNotifications(receiveNotifications);
            settings.setThemePreference(themePreference);
            settings.setLanguagePreference(languagePreference);
        }
        return userSettingsRepository.save(settings);
    }

}
