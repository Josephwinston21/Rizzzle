package com.rizzzle.controllers;

import com.rizzzle.services.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @PostMapping("/send")
    public ResponseEntity<?> sendMessage(@RequestParam String userId, @RequestParam String recipientId, @RequestBody String message) {
        return ResponseEntity.ok(chatService.sendMessage(userId, recipientId, message));
    }

    @GetMapping("/messages")
    public ResponseEntity<?> getMessages(@RequestParam String userId, @RequestParam String recipientId) {
        return ResponseEntity.ok(chatService.getMessagesBetweenUsers(userId, recipientId));
    }
}
