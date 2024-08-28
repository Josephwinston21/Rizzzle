#!/bin/bash
aws cloudformation create-stack \
  --stack-name RizzzleRDSStack \
  --template-body file://cloudformation/templates/rds-template.yaml \
  --capabilities CAPABILITY_NAMED_IAM \
  --region us-east-1

#Instructions:
#
#Ensure that your RDS settings in rds-template.yaml are configured with correct subnet IDs and security group.
#Run the script:
#bash
#Copy code
#bash cloudformation/stacks/deploy-rds-stack.sh
