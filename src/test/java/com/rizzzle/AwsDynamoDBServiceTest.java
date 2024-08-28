package com.rizzzle;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.rizzzle.services.AwsDynamoDBService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class AwsDynamoDBServiceTest {

    @Mock
    private AmazonDynamoDB dynamoDBClient;

    @InjectMocks
    private AwsDynamoDBService awsDynamoDBService;

    @Test
    public void testStoreData() {
        String result = awsDynamoDBService.storeData("Test data");
        assertEquals("Data stored successfully", result);
    }

    @Test
    public void testGetData() {
        Object result = awsDynamoDBService.getData("Test key");
        assertNotNull(result);
    }
}
