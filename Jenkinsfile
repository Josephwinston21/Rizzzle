pipeline {
    agent any
    environment {
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
        DOCKER_IMAGE = 'rizzzle-app'
        DOCKER_TAG = 'latest'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/rizzzle.git'
            }
        }
        stage('Build') {
            steps {
                sh 'mvn clean install'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
                sh 'npm run test'
            }
        }
        stage('Docker Build') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }
        stage('Docker Push') {
            steps {
                script {
                    docker.withRegistry('', "${DOCKER_CREDENTIALS_ID}") {
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push()
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                sh './deploy.sh'
            }
        }
    }
}



// Instructions:
//
// Replace your-username: Update the GitHub URL to point to your own repository.
// Set Up Docker Credentials: Ensure that your Jenkins environment has the correct Docker credentials set under DOCKER_CREDENTIALS_ID.
// Customize DOCKER_IMAGE and DOCKER_TAG: Change these values if you want a different image name or tag.
// Create a deploy.sh script: Ensure you have a deploy.sh script that will handle the deployment of the Docker image.
