package com.rizzzle;

import com.rizzzle.services.AwsBeanstalkService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class AwsBeanstalkServiceTest {

    private AwsBeanstalkService awsBeanstalkService = new AwsBeanstalkService();

    @Test
    public void testDeployApp() {
        String result = awsBeanstalkService.deployApp();
        assertEquals("Deployment successful", result);
    }
}
