#!groovy 
pipeline {
  agent none
  stages {
    stage('release') {
      agent any
      steps {
        sh 'docker login -u dani3l8200 -p anonymo2'
        sh 'docker build -t dani3l8200/frontend ./frontend/'
        sh 'docker push dani3l8200/frontend:latest'
        sh 'docker build -t dani3l8200/backend ./backend/'
        sh 'docker push dani3l8200/backend:latest'
      }
    }
    stage('backend') {
      agent any
      steps {
        sh 'docker stop backend'
        sh 'docker rm backend'
        sh 'docker login -u dani3l8200 -p anonymo2'
        sh 'docker pull dani3l8200/backend:latest'
        sh 'docker run -d -p 0.0.0.0:4000:4000 --name=backend dani3l8200/backend:latest'
      }
    }
    stage('test-deploy') {
      agent any
      steps {
        sh 'docker stop frontend-test'
        sh 'docker rm frontend-test'
        sh 'docker login -u dani3l8200 -p anonymo2'
        sh 'docker pull dani3l8200/frontend:latest'
        sh 'docker run -d --name=frontend-test dani3l8200/frontend:latest'
        sh 'docker exec -i -w /fronted frontend-test npm run test -- --watchAll=false --coverage'
      }
    }
    stage('deploy') {
      agent any
      steps {
        sh 'docker login -u dani3l8200 -p anonymo2'
        sh 'docker pull dani3l8200/frontend:latest'
        sh 'docker run -d -p 0.0.0.0:80:80 --name=frontend dani3l8200/frontend:latest'
      }
    }
  }
}