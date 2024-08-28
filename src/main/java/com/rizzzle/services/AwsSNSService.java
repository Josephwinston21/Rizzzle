package com.rizzzle.services;

import com.amazonaws.services.sns.AmazonSNS;
import com.amazonaws.services.sns.model.PublishRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AwsSNSService {

    @Autowired
    private AmazonSNS amazonSNS;

    public void sendNotification(String topicArn, String message) {
        // Logic to send notification via SNS
        amazonSNS.publish(new PublishRequest(topicArn, message));
    }

    public void subscribeToTopic(String topicArn, String protocol, String endpoint) {
        // Logic to subscribe to an SNS topic
        amazonSNS.subscribe(topicArn, protocol, endpoint);
    }
}
