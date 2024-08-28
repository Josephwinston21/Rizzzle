package com.rizzzle;

import com.rizzzle.models.User;
import com.rizzzle.repositories.UserRepository;
import com.rizzzle.services.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    public void testGetUserProfile() {
        User user = new User();
        user.setId("1");
        when(userRepository.findById("1")).thenReturn(java.util.Optional.of(user));

        User result = userService.getUserProfile("1");
        assertNotNull(result);
        assertEquals("1", result.getId());
    }

    @Test
    public void testUpdateUserProfile() {
        User user = new User();
        user.setId("1");
        user.setName("John Doe");

        when(userRepository.existsById("1")).thenReturn(true);
        when(userRepository.save(user)).thenReturn(user);

        User result = userService.updateUserProfile("1", user);
        assertNotNull(result);
        assertEquals("John Doe", result.getName());
    }
}
