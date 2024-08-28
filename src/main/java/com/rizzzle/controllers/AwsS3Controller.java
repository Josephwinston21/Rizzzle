package com.rizzzle.controllers;

import com.rizzzle.services.AwsS3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/aws/s3")
public class AwsS3Controller {

    @Autowired
    private AwsS3Service awsS3Service;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
        return ResponseEntity.ok(awsS3Service.uploadFile(file));
    }

    @GetMapping("/download")
    public ResponseEntity<?> downloadFile(@RequestParam String fileName) {
        return ResponseEntity.ok(awsS3Service.downloadFile(fileName));
    }
}
