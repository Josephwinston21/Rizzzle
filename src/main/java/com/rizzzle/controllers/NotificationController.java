package com.rizzzle.controllers;

import com.rizzzle.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notification")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/{userId}")
    public ResponseEntity<?> getNotifications(@PathVariable String userId) {
        return ResponseEntity.ok(notificationService.getNotificationsForUser(userId));
    }

    @PostMapping("/markAsRead")
    public ResponseEntity<?> markNotificationsAsRead(@RequestParam String userId, @RequestBody String[] notificationIds) {
        return ResponseEntity.ok(notificationService.markNotificationsAsRead(userId, notificationIds));
    }
}
