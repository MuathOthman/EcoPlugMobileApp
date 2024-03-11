pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build Application') {
            steps {
                sh 'docker build -t muathothman/ecoplugfe:latest .'
                echo 'Application built and Docker image created.'
            }
        }
        stage('Deploy Application') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker_hub_credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh '''
                        echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                        docker push muathothman/ecoplugfe:latest
                        '''
                    }
                }
                echo 'Deployment completed.'
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}