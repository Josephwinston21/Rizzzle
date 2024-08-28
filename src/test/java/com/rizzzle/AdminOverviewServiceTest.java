package com.rizzzle;

import com.rizzzle.repositories.UserRepository;
import com.rizzzle.services.AdminOverviewService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class AdminOverviewServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private AdminOverviewService adminOverviewService;

    @Test
    public void testGetOverview() {
        Object result = adminOverviewService.getOverview();
        assertNotNull(result);
    }

    @Test
    public void testManageUsers() {
        String result = adminOverviewService.manageUsers("delete", "user_1");
        assertEquals("User management successful", result);
    }
}
