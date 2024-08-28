package com.rizzzle.controllers;

import com.rizzzle.models.User;
import com.rizzzle.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserProfile(@PathVariable String userId) {
        User user = userService.getUserProfile(userId);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{userId}")
    public ResponseEntity<User> updateUserProfile(@PathVariable String userId, @RequestBody User updatedProfile) {
        User user = userService.updateUserProfile(userId, updatedProfile);
        return ResponseEntity.ok(user);
    }
}
