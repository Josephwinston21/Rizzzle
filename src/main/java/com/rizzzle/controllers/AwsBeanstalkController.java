package com.rizzzle.controllers;

import com.rizzzle.services.AwsBeanstalkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/aws/beanstalk")
public class AwsBeanstalkController {

    @Autowired
    private AwsBeanstalkService awsBeanstalkService;

    @PostMapping("/deploy")
    public ResponseEntity<?> deployApp() {
        return ResponseEntity.ok(awsBeanstalkService.deployApp());
    }
}
