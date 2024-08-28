#!/bin/bash

# Variables
ENV_NAME="rizzzle-env"

# Terminate the Elastic Beanstalk environment
eb terminate $ENV_NAME --force


#Instructions:
#
#Customize Environment Name: Update ENV_NAME if your environment name differs.
#Run the Script: Use this script to safely terminate your environment when needed.
