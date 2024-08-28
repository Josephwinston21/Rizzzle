#!/bin/bash
aws cloudformation create-stack \
  --stack-name RizzzleCloudWatchStack \
  --template-body file://cloudformation/templates/cloudwatch-template.yaml \
  --capabilities CAPABILITY_NAMED_IAM \
  --region us-east-1


#Instructions:
#
#Check your CloudWatch configurations, especially for EC2 instance IDs and SNS topics.
#Run the script:
#bash
#Copy code
#bash cloudformation/stacks/deploy-cloudwatch-stack.sh
