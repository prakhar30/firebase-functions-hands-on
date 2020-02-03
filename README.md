# TeraValve Serverless


## Endpoints created 
1. https://us-central1-teravalve-90327.cloudfunctions.net/helloWorld 
	- Normal Hello world API
2. https://us-central1-teravalve-90327.cloudfunctions.net/updateStatus
	- POST method
	- Body in the form of - {"alarmEngaged": true/false}
	- Response like - {alarmEngaged - true/false}

	
## Commands in chronological order of their use
1. sudo npm install -g firebase-tools
2. firebase login
3. firebase init functions
4. firebase deploy

## Tutorial Followed
https://blog.usejournal.com/build-a-serverless-full-stack-app-using-firebase-cloud-functions-81afe34a64fc   			