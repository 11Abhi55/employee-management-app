pipeline {
    agent any 

    environment {
        // तुमच्या Jenkins Credentials मधील ID इथे तपासा ('verce_token' की 'vercel_token')
        VERCEL_TOKEN = credentials('verce_token') 
    }

    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                // तुमच्या package.json मधील jest टेस्ट्स रन करण्यासाठी
                bat 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                // Node.js/Express ॲप थेट Vercel वर डिप्लॉय होईल (विना बिल्ड)
                bat 'npx vercel --prod --yes --token=%VERCEL_TOKEN%'
            }
        }
    }
}
