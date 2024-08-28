package com.rizzzle;

import com.rizzzle.models.Location;
import com.rizzzle.repositories.LocationRepository;
import com.rizzzle.services.LocationService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class LocationServiceTest {

    @Mock
    private LocationRepository locationRepository;

    @InjectMocks
    private LocationService locationService;

    @Test
    public void testGetLocationForUser() {
        Location location = new Location();
        location.setUserId("1");
        when(locationRepository.findByUserId("1")).thenReturn(location);

        Location result = locationService.getLocationForUser("1");
        assertNotNull(result);
        assertEquals("1", result.getUserId());
    }
}
