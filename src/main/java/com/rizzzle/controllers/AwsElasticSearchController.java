package com.rizzzle.controllers;

import com.rizzzle.services.AwsElasticSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/aws/elasticsearch")
public class AwsElasticSearchController {

    @Autowired
    private AwsElasticSearchService awsElasticSearchService;

    @PostMapping("/index")
    public ResponseEntity<?> indexDocuments(@RequestBody String documents) {
        return ResponseEntity.ok(awsElasticSearchService.indexDocuments(documents));
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchDocuments(@RequestParam String query) {
        return ResponseEntity.ok(awsElasticSearchService.searchDocuments(query));
    }
}
