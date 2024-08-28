package com.rizzzle.repositories;

import com.rizzzle.models.Settings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SettingsRepository extends JpaRepository<Settings, String> {
    Settings findByUserId(String userId);
}
