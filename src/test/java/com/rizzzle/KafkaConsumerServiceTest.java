package com.rizzzle;

import com.rizzzle.services.KafkaConsumerService;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.Mockito.*;

@SpringBootTest
public class KafkaConsumerServiceTest {

    @Mock
    private KafkaConsumer<String, String> kafkaConsumer;

    @InjectMocks
    private KafkaConsumerService kafkaConsumerService;

    @Test
    public void testReceiveMessages() {
        kafkaConsumerService.receiveMessages("topic");
        verify(kafkaConsumer, times(1)).poll(any());
    }
}
