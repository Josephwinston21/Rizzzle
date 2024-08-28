package com.rizzzle.controllers;

import com.rizzzle.services.SettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/settings")
public class SettingsController {

    @Autowired
    private SettingsService settingsService;

    @GetMapping("/{userId}")
    public ResponseEntity<?> getSettings(@PathVariable String userId) {
        return ResponseEntity.ok(settingsService.getSettingsForUser(userId));
    }

    @PostMapping("/{userId}")
    public ResponseEntity<?> updateSettings(@PathVariable String userId, @RequestBody String settings) {
        return ResponseEntity.ok(settingsService.updateSettings(userId, settings));
    }
}
