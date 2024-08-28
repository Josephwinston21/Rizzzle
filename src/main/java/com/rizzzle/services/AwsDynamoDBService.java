package com.rizzzle.services;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.model.PutItemRequest;
import com.amazonaws.services.dynamodbv2.model.GetItemRequest;
import com.amazonaws.services.dynamodbv2.model.GetItemResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AwsDynamoDBService {

    @Autowired
    private AmazonDynamoDB dynamoDB;

    public void storeData(String tableName, Map<String, Object> itemValues) {
        // Logic to store data in DynamoDB
        dynamoDB.putItem(new PutItemRequest(tableName, itemValues));
    }

    public GetItemResult getData(String tableName, Map<String, Object> key) {
        // Logic to retrieve data from DynamoDB
        return dynamoDB.getItem(new GetItemRequest().withTableName(tableName).withKey(key));
    }
}
