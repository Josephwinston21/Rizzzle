package com.rizzzle.controllers;

import com.rizzzle.services.HubSpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/hubspot")
public class HubSpotController {

    @Autowired
    private HubSpotService hubSpotService;

    @PostMapping("/trackEvent")
    public ResponseEntity<?> trackEvent(@RequestBody String eventData) {
        return ResponseEntity.ok(hubSpotService.trackEvent(eventData));
    }

    @PostMapping("/createContact")
    public ResponseEntity<?> createContact(@RequestBody String contactData) {
        return ResponseEntity.ok(hubSpotService.createContact(contactData));
    }

    @GetMapping("/fetchCRMData")
    public ResponseEntity<?> fetchCRMData(@RequestParam String contactId) {
        return ResponseEntity.ok(hubSpotService.fetchCRMData(contactId));
    }
}
