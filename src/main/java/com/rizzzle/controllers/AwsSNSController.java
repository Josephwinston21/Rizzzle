package com.rizzzle.controllers;

import com.rizzzle.services.AwsSNSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/aws/sns")
public class AwsSNSController {

    @Autowired
    private AwsSNSService awsSNSService;

    @PostMapping("/sendNotification")
    public ResponseEntity<?> sendNotification(@RequestBody String message) {
        return ResponseEntity.ok(awsSNSService.sendNotification(message));
    }

    @PostMapping("/subscribe")
    public ResponseEntity<?> subscribeToTopic(@RequestParam String topicArn, @RequestParam String endpoint) {
        return ResponseEntity.ok(awsSNSService.subscribeToTopic(topicArn, endpoint));
    }
}
