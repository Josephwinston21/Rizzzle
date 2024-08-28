package com.rizzzle;

import com.amazonaws.services.rds.AmazonRDS;
import com.rizzzle.services.AwsRDSService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class AwsRDSServiceTest {

    @Mock
    private AmazonRDS amazonRDS;

    @InjectMocks
    private AwsRDSService awsRDSService;

    @Test
    public void testQueryDatabase() {
        Object result = awsRDSService.queryDatabase("SELECT * FROM users");
        assertNotNull(result);
    }
}
