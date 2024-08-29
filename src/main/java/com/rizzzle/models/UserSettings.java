package com.rizzzle.models;


import jakarta.persistence.*;

@Entity
public class UserSettings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private boolean receiveNotifications;
    private String themePreference; // e.g., light, dark
    private String languagePreference;

    // Constructors
    public UserSettings() {}

    public UserSettings(Long userId, boolean receiveNotifications, String themePreference, String languagePreference) {
        this.userId = userId;
        this.receiveNotifications = receiveNotifications;
        this.themePreference = themePreference;
        this.languagePreference = languagePreference;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public boolean isReceiveNotifications() {
        return receiveNotifications;
    }

    public void setReceiveNotifications(boolean receiveNotifications) {
        this.receiveNotifications = receiveNotifications;
    }

    public String getThemePreference() {
        return themePreference;
    }

    public void setThemePreference(String themePreference) {
        this.themePreference = themePreference;
    }

    public String getLanguagePreference() {
        return languagePreference;
    }

    public void setLanguagePreference(String languagePreference) {
        this.languagePreference = languagePreference;
    }
}
