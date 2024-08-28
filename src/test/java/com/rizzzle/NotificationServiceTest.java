package com.rizzzle;

import com.rizzzle.models.Notification;
import com.rizzzle.repositories.NotificationRepository;
import com.rizzzle.services.NotificationService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class NotificationServiceTest {

    @Mock
    private NotificationRepository notificationRepository;

    @InjectMocks
    private NotificationService notificationService;

    @Test
    public void testGetNotificationsForUser() {
        Notification notification = new Notification();
        notification.setUserId("1");
        when(notificationRepository.findByUserId("1")).thenReturn(Arrays.asList(notification));

        List<Notification> result = notificationService.getNotificationsForUser("1");
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("1", result.get(0).getUserId());
    }

    @Test
    public void testMarkNotificationsAsRead() {
        Notification notification = new Notification();
        notification.setUserId("1");
        notification.setId("notif_1");

        when(notificationRepository.findByIdInAndUserId(any(String[].class), eq("1"))).thenReturn(Arrays.asList(notification));

        boolean result = notificationService.markNotificationsAsRead("1", new String[]{"notif_1"});
        assertTrue(result);
    }
}
