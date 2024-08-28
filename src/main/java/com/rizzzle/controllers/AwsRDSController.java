package com.rizzzle.controllers;

import com.rizzzle.services.AwsRDSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/aws/rds")
public class AwsRDSController {

    @Autowired
    private AwsRDSService awsRDSService;

    @PostMapping("/query")
    public ResponseEntity<?> queryDatabase(@RequestBody String query) {
        return ResponseEntity.ok(awsRDSService.queryDatabase(query));
    }
}
