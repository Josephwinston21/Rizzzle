#!/bin/bash
aws cloudformation create-stack \
  --stack-name RizzzleElasticsearchStack \
  --template-body file://cloudformation/templates/elasticsearch-template.yaml \
  --capabilities CAPABILITY_NAMED_IAM \
  --region us-east-1


#Instructions:
#
#Ensure that the Elasticsearch domain configuration in elasticsearch-template.yaml meets your needs.
#Run the script:
#bash
#Copy code
#bash cloudformation/stacks/deploy-elasticsearch-stack.sh
