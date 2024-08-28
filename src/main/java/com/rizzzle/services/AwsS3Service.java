package com.rizzzle.services;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.rizzzle.models.AWSS3File;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
public class AwsS3Service {

    @Autowired
    private AmazonS3 amazonS3;

    public void uploadFile(String bucketName, String keyName, File file) {
        // Logic to upload a file to S3
        amazonS3.putObject(new PutObjectRequest(bucketName, keyName, file));
    }

    public AWSS3File getFileMetadata(String bucketName, String keyName) {
        // Logic to get file metadata from S3
        return new AWSS3File(amazonS3.getObjectMetadata(bucketName, keyName));
    }
}
