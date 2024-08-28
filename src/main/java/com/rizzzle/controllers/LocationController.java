package com.rizzzle.controllers;

import com.rizzzle.services.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/location")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping("/get")
    public ResponseEntity<?> getLocation(@RequestParam String userId) {
        return ResponseEntity.ok(locationService.getLocationForUser(userId));
    }
}
