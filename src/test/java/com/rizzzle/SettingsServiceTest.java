package com.rizzzle;

import com.rizzzle.models.Settings;
import com.rizzzle.repositories.SettingsRepository;
import com.rizzzle.services.SettingsService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class SettingsServiceTest {

    @Mock
    private SettingsRepository settingsRepository;

    @InjectMocks
    private SettingsService settingsService;

    @Test
    public void testGetSettingsForUser() {
        Settings settings = new Settings();
        settings.setUserId("1");
        when(settingsRepository.findByUserId("1")).thenReturn(settings);

        Settings result = settingsService.getSettingsForUser("1");
        assertNotNull(result);
        assertEquals("1", result.getUserId());
    }

    @Test
    public void testUpdateSettings() {
        Settings settings = new Settings();
        settings.setUserId("1");

        when(settingsRepository.save(settings)).thenReturn(settings);

        Settings result = settingsService.updateSettings("1", settings);
        assertNotNull(result);
        assertEquals("1", result.getUserId());
    }
}
