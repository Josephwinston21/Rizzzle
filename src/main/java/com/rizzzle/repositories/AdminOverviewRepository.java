package com.rizzzle.repositories;

import com.rizzzle.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminOverviewRepository extends JpaRepository<User, String> {
    void deleteById(Long id);
    // Implement custom queries for gathering statistics and user management
}
