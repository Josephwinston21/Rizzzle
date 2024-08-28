package com.rizzzle.controllers;

import com.rizzzle.services.AdminOverviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminOverviewController {

    @Autowired
    private AdminOverviewService adminOverviewService;

    @GetMapping("/overview")
    public ResponseEntity<?> getAdminOverview() {
        return ResponseEntity.ok(adminOverviewService.getOverview());
    }

    @PostMapping("/manageUsers")
    public ResponseEntity<?> manageUsers(@RequestParam String action, @RequestParam String userId) {
        return ResponseEntity.ok(adminOverviewService.manageUsers(action, userId));
    }
}
