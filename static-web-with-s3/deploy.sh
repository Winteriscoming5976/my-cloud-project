#!/bin/bash

echo "Deploying CloudFormation stack..."

aws cloudformation deploy \
  --template-file template.yaml \
  --stack-name my-static-site

echo "Deployment complete!"