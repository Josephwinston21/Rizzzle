#!/bin/bash

# Variables
APP_NAME="RizzzleApp"
ENV_NAME="rizzzle-env"
REGION="us-east-1"
S3_BUCKET="your-s3-bucket-name"
DOCKER_IMAGE="your-dockerhub-username/rizzzle-app:latest"

# Deploy the application to Elastic Beanstalk
eb init $APP_NAME --platform "Docker" --region $REGION
eb create $ENV_NAME --cname $ENV_NAME --elb-type application
eb setenv DOCKER_IMAGE=$DOCKER_IMAGE S3_BUCKET=$S3_BUCKET
eb deploy $ENV_NAME

# Open the application in the default web browser
eb open $ENV_NAME


#Instructions:
#Customize Variables: Replace your-s3-bucket-name and your-dockerhub-username with your actual S3 bucket name and Docker Hub username.
#Create S3 Bucket: Ensure that the S3 bucket is created using the s3-template.yaml before deploying the app.
#Run the Script: Execute this script after setting up your environment.
#infrastructure/aws/elastic-beanstalk/scripts/deploy.sh
#Custom Changes:
#S3 Bucket: Update the EB_BUCKET variable with your Elastic Beanstalk S3 bucket name.
#Application Name: Update RizzzleApp with your application name if different.
#Version Label: You may change the version label v1 based on your deployment strategy.
