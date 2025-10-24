pipeline {
    agent any

    tools {
        maven 'Maven'
    }

    parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Git branch to build')
        string(name: 'BUILD_ENV', defaultValue: 'dev', description: 'Build environment (dev/staging/prod)')
    }

    environment {
        NEW_VERSION = "1.3.0"
    }

    stages {

        stage('Build') {
            steps {
                echo "Building version ${NEW_VERSION} on branch ${params.BRANCH_NAME}"
                // Uncomment the line below if Maven is configured correctly
                // bat "mvn clean package -Dversion=${NEW_VERSION}"
            }
        }

        stage('Unit Test') {
            when {
                expression { return params.BUILD_ENV == 'dev' }
            }
            steps {
                echo 'Running unit tests...'
                // bat "mvn test"
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying application for environment: ${params.BUILD_ENV}"
                // bat "deploy_script.bat ${params.BUILD_ENV}"
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            // deleteDir()
        }
        success {
            echo ' Pipeline succeeded.'
        }
        failure {
            echo ' Pipeline failed.'
        }
    }
}
