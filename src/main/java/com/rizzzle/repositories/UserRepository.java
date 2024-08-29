package com.rizzzle.repositories;

import com.rizzzle.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    List<User> findByNameContaining(String name);

    Optional<User> findById(Long id);

    void deleteById(Long id);

    boolean existsByEmail(String email);
}
