#!/bin/bash
aws cloudformation create-stack \
  --stack-name RizzzleBeanstalkStack \
  --template-body file://cloudformation/templates/beanstalk-template.yaml \
  --capabilities CAPABILITY_NAMED_IAM \
  --region us-east-1


#Ensure that your Elastic Beanstalk application and environment are correctly defined in beanstalk-template.yaml.
#Run the script:
#bash
#Copy code
#bash cloudformation/stacks/deploy-beanstalk-stack.sh
