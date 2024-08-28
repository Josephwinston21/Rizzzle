#!/bin/bash

# Variables
ENV_NAME="rizzzle-env"
VERSION_LABEL="v1"

# Rebuild the Elastic Beanstalk environment
eb deploy $ENV_NAME --version $VERSION_LABEL --rebuild

#Instructions:
#
#Customize Version Label: Update the VERSION_LABEL if you're managing different versions.
#Run the Script: Use this script to rebuild your environment with the latest version.
