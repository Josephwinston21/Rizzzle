package com.rizzzle;

import com.rizzzle.models.CallStatus;
import com.rizzzle.repositories.CallStatusRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class CallStatusRepositoryTest {

    @Autowired
    private CallStatusRepository callStatusRepository;

    @Test
    public void testSaveCallStatus() {
        CallStatus callStatus = new CallStatus();
        callStatus.setId("call_1");
        callStatus.setUserId("1");
        callStatus.setOngoing(true);

        CallStatus result = callStatusRepository.save(callStatus);
        assertNotNull(result);
        assertEquals("call_1", result.getId());
    }
}
