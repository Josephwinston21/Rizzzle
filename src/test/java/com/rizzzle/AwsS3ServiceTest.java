package com.rizzzle;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.rizzzle.services.AwsS3Service;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class AwsS3ServiceTest {

    @Mock
    private AmazonS3 amazonS3;

    @InjectMocks
    private AwsS3Service awsS3Service;

    @Test
    public void testUploadFile() {
        MultipartFile file = mock(MultipartFile.class);
        when(file.getOriginalFilename()).thenReturn("test.txt");
        when(amazonS3.putObject(any(), any(), any(File.class))).thenReturn(new PutObjectResult());

        String result = awsS3Service.uploadFile(file);
        assertEquals("test.txt", result);
    }
}
