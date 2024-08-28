package com.rizzzle.services;

import com.rizzzle.models.Chat;
import com.rizzzle.repositories.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {

    @Autowired
    private ChatRepository chatRepository;

    public Chat sendMessage(Chat chat) {
        // Logic to send a message
        return chatRepository.save(chat);
    }

    public List<Chat> getMessages(Long userId, Long matchId) {
        // Logic to fetch messages for a chat
        return chatRepository.findAllByUserIdAndMatchId(userId, matchId);
    }

    public void deleteMessage(Long messageId) {
        // Logic to delete a message
        chatRepository.deleteById(messageId);
    }
}
