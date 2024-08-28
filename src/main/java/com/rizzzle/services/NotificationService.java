package com.rizzzle.services;

import com.rizzzle.models.Notification;
import com.rizzzle.repositories.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    public Notification createNotification(Notification notification) {
        // Logic to create a new notification
        return notificationRepository.save(notification);
    }

    public List<Notification> getUserNotifications(Long userId) {
        // Logic to fetch notifications for a user
        return notificationRepository.findAllByUserId(userId);
    }

    public void markAsRead(Long notificationId) {
        // Logic to mark a notification as read
        notificationRepository.markAsRead(notificationId);
    }
}
