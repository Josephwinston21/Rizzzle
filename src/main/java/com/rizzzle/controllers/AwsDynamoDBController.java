package com.rizzzle.controllers;

import com.rizzzle.services.AwsDynamoDBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/aws/dynamodb")
public class AwsDynamoDBController {

    @Autowired
    private AwsDynamoDBService awsDynamoDBService;

    @PostMapping("/store")
    public ResponseEntity<?> storeData(@RequestBody String data) {
        return ResponseEntity.ok(awsDynamoDBService.storeData(data));
    }

    @GetMapping("/get")
    public ResponseEntity<?> getData(@RequestParam String key) {
        return ResponseEntity.ok(awsDynamoDBService.getData(key));
    }
}
