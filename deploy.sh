#!/bin/bash

# Build and push Docker images
docker build -t rizzzle-app:latest .
docker tag rizzzle-app:latest your-dockerhub-username/rizzzle-app:latest
docker push your-dockerhub-username/rizzzle-app:latest

# Deploy to AWS Elastic Beanstalk
eb init rizzzle-app --platform "Docker" --region "us-east-1"
eb create rizzzle-env
eb deploy

# Display the application URL
eb open

#Instructions:
#
#Docker Hub Username: Replace your-dockerhub-username with your actual Docker Hub username.
#AWS Configuration: Ensure you have the AWS Elastic Beanstalk CLI (eb) configured in your terminal.
#Run the Script: Execute this script to build, push, and deploy the application.
