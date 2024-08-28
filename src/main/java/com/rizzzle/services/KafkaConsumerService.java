package com.rizzzle.services;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {

    @KafkaListener(topics = "rizzzle-topic", groupId = "group_id")
    public void consumeMessage(String message) {
        // Logic to consume messages from Kafka
        System.out.println("Consumed message: " + message);
    }
}
