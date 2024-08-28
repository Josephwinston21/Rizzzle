package com.rizzzle.controllers;

import com.rizzzle.services.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/search")
public class SearchController {

    @Autowired
    private SearchService searchService;

    @GetMapping("/profiles")
    public ResponseEntity<?> searchProfiles(@RequestParam String query) {
        return ResponseEntity.ok(searchService.searchProfiles(query));
    }
}
