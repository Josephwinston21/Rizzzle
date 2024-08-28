package com.rizzzle;

import com.amazonaws.services.sns.AmazonSNS;
import com.amazonaws.services.sns.model.PublishResult;
import com.rizzzle.services.AwsSNSService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class AwsSNSServiceTest {

    @Mock
    private AmazonSNS amazonSNS;

    @InjectMocks
    private AwsSNSService awsSNSService;

    @Test
    public void testSendNotification() {
        when(amazonSNS.publish(any())).thenReturn(new PublishResult().withMessageId("message_id"));

        String result = awsSNSService.sendNotification("Test message");
        assertEquals("message_id", result);
    }
}
