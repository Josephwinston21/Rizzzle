#!/bin/bash

# Variables
ENV_NAME="rizzzle-env"
LOAD_BALANCER_TYPE="application"

# Configure the ELB
eb setenv ENV_NAME=$ENV_NAME ELB_TYPE=$LOAD_BALANCER_TYPE


#Instructions:
#Customize ELB Settings: Modify the LOAD_BALANCER_TYPE if you need a different type (e.g., classic).
#Run the Script: Execute this script to configure the ELB settings for your environment.
