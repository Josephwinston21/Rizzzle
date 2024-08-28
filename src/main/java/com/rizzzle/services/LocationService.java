package com.rizzzle.services;

import com.rizzzle.models.Location;
import com.rizzzle.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;

    public Location saveLocation(Location location) {
        // Logic to save or update a user's location
        return locationRepository.save(location);
    }

    public Optional<Location> getLocationByUserId(Long userId) {
        // Logic to fetch location by user ID
        return locationRepository.findByUserId(userId);
    }
}
