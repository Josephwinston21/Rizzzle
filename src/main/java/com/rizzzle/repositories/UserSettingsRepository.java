package com.rizzzle.repositories;

import com.rizzzle.models.UserSettings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserSettingsRepository extends JpaRepository<UserSettings, Long> {
    UserSettings findByUserId(Long userId);
}
