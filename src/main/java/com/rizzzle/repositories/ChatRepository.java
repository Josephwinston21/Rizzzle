package com.rizzzle.repositories;

import com.rizzzle.models.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRepository extends JpaRepository<Chat, String> {
    List<Chat> findByUserIdAndRecipientId(String userId, String recipientId);
}
