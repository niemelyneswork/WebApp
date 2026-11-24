pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm.cmd install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm.cmd test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t webapp:latest .'
            }
        }

        stage('Deploy Application') {
            steps {
                bat 'docker rm -f webapp-container'
                bat 'docker run -d --name webapp-container -p 3000:3000 webapp:latest'
            }
        }
    }
}