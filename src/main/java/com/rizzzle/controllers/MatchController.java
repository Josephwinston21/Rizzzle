package com.rizzzle.controllers;

import com.rizzzle.services.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/match")
public class MatchController {

    @Autowired
    private MatchService matchService;

    @GetMapping("/{userId}")
    public ResponseEntity<?> getMatches(@PathVariable String userId) {
        return ResponseEntity.ok(matchService.getMatchesForUser(userId));
    }

    @PostMapping("/like")
    public ResponseEntity<?> likeProfile(@RequestParam String userId, @RequestParam String profileId) {
        return ResponseEntity.ok(matchService.likeProfile(userId, profileId));
    }

    @PostMapping("/superLike")
    public ResponseEntity<?> superLikeProfile(@RequestParam String userId, @RequestParam String profileId) {
        return ResponseEntity.ok(matchService.superLikeProfile(userId, profileId));
    }
}
