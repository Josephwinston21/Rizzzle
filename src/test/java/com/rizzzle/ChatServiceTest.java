package com.rizzzle;

import com.rizzzle.models.Chat;
import com.rizzzle.repositories.ChatRepository;
import com.rizzzle.services.ChatService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class ChatServiceTest {

    @Mock
    private ChatRepository chatRepository;

    @InjectMocks
    private ChatService chatService;

    @Test
    public void testSendMessage() {
        Chat chat = new Chat("1", "2", "Hello");
        when(chatRepository.save(chat)).thenReturn(chat);

        Chat result = chatService.sendMessage("1", "2", "Hello");
        assertNotNull(result);
        assertEquals("1", result.getUserId());
        assertEquals("2", result.getRecipientId());
        assertEquals("Hello", result.getMessage());
    }

    @Test
    public void testGetMessagesBetweenUsers() {
        Chat chat = new Chat("1", "2", "Hello");
        when(chatRepository.findByUserIdAndRecipientId("1", "2")).thenReturn(Arrays.asList(chat));

        List<Chat> result = chatService.getMessagesBetweenUsers("1", "2");
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("Hello", result.get(0).getMessage());
    }
}
