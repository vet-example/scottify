pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''yarn
npm run build'''
      }
    }
    stage('Unit Tests') {
      steps {
        sh 'npm test'
      }
    }
    stage('Acceptance Tests') {
      steps {
        sh 'npm run acceptance'
      }
    }
    stage('Deploy to Dev Env') {
      steps {
        sh 'sls --stage dev deploy'
      }
    }
    stage('Deploy To Ref?') {
      steps {
        input 'Progress Dev Build To Reference Env?'
      }
    }
    stage('Deploy To Ref') {
      steps {
        sh 'sls deploy --stage reference'
      }
    }
  }
}