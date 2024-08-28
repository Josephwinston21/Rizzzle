#!/bin/bash
aws cloudformation create-stack \
  --stack-name RizzzleS3Stack \
  --template-body file://cloudformation/templates/s3-template.yaml \
  --capabilities CAPABILITY_NAMED_IAM \
  --region us-east-1

#Instructions:
#
#Verify that your bucket name in s3-template.yaml is unique.
#Run the script:
#bash
#Copy code
#bash cloudformation/stacks/deploy-s3-stack.sh
