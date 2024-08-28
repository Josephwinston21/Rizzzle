package com.rizzzle;

import com.rizzzle.services.KafkaProducerService;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.Mockito.*;

@SpringBootTest
public class KafkaProducerServiceTest {

    @Mock
    private KafkaProducer<String, String> kafkaProducer;

    @InjectMocks
    private KafkaProducerService kafkaProducerService;

    @Test
    public void testSendMessage() {
        kafkaProducerService.sendMessage("topic", "message");
        verify(kafkaProducer, times(1)).send(any(ProducerRecord.class));
    }
}
