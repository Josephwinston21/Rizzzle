package com.rizzzle.repositories;

import com.rizzzle.models.CallStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CallStatusRepository extends JpaRepository<CallStatus, String> {
}
