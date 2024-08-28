package com.rizzzle.services;

import com.rizzzle.models.AdminOverview;
import com.rizzzle.repositories.AdminOverviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminOverviewService {

    @Autowired
    private AdminOverviewRepository adminOverviewRepository;

    public AdminOverview createOverview(AdminOverview overview) {
        // Logic to create an admin overview entry
        return adminOverviewRepository.save(overview);
    }

    public List<AdminOverview> getAllOverviews() {
        // Logic to get all admin overviews
        return adminOverviewRepository.findAll();
    }

    public AdminOverview updateOverview(AdminOverview overview) {
        // Logic to update an admin overview entry
        return adminOverviewRepository.save(overview);
    }

    public void deleteOverview(Long id) {
        // Logic to delete an admin overview entry
        adminOverviewRepository.deleteById(id);
    }
}
