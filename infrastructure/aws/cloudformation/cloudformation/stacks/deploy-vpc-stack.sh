#!/bin/bash
aws cloudformation create-stack \
  --stack-name RizzzleVPCStack \
  --template-body file://cloudformation/templates/vpc-template.yaml \
  --capabilities CAPABILITY_NAMED_IAM \
  --region us-east-1

#Instructions:
#
#Make sure the AWS CLI is configured with appropriate credentials and region.
#Run this script in your terminal to deploy the VPC stack:
#bash
#Copy code
#bash cloudformation/stacks/deploy-vpc-stack.sh
