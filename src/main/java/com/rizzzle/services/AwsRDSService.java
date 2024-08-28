package com.rizzzle.services;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class AwsRDSService {

    private final JdbcTemplate jdbcTemplate;

    public AwsRDSService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void executeQuery(String sql) {
        // Logic to execute a SQL query on RDS
        jdbcTemplate.execute(sql);
    }

    public <T> T queryForObject(String sql, Class<T> requiredType) {
        // Logic to execute a query and return a single result
        return jdbcTemplate.queryForObject(sql, requiredType);
    }
}
