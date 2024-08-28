package com.rizzzle;

import com.rizzzle.services.AwsElasticSearchService;
import org.elasticsearch.client.RestHighLevelClient;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class AwsElasticSearchServiceTest {

    @Mock
    private RestHighLevelClient elasticsearchClient;

    @InjectMocks
    private AwsElasticSearchService awsElasticSearchService;

    @Test
    public void testIndexDocuments() {
        String result = awsElasticSearchService.indexDocuments("Test documents");
        assertEquals("Indexing successful", result);
    }

    @Test
    public void testSearchDocuments() {
        Object result = awsElasticSearchService.searchDocuments("Test query");
        assertNotNull(result);
    }
}
