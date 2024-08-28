package com.rizzzle;

import com.rizzzle.models.User;
import com.rizzzle.repositories.UserRepository;
import com.rizzzle.services.SearchService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class SearchServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private SearchService searchService;

    @Test
    public void testSearchProfiles() {
        User user = new User();
        user.setName("John Doe");
        when(userRepository.findByNameContaining("John")).thenReturn(Arrays.asList(user));

        List<User> result = searchService.searchProfiles("John");
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("John Doe", result.get(0).getName());
    }
}
