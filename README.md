# Email React Application
This repository is a single page web-application of a list of emails which is written in ReactJs. I created this project as my entry for LOPhils' technical exam. For the implementation of this project, I used the bootstrap framework to aid with the layouting for the front-end design. Furthermore, I used json-server to store the email objects in order to simulate a client-server relationship. Please excuse some of the content of the email objects, I used my creativity to fill up the dummy records with random information. I also only created 10 unique email information for the array and I copy pasted it 10 times. 

## Functionality
- You can delete emails by checking the checkbox button of the emails you are going to delete and then clicking the delete button

## Demonstration
The following pictures are demonstrate the what the website looks like when launched:

<img src="readme_pics/lophils1.png" width="600" title="Closed email">
<img src="readme_pics/lophils2.png" width="600" title="Opened email">

## Launch information

In order to run the project, first run the following code in the project folder using command line to start the json server:
### `npx json-server --watch Data/emailList.json --port 8000`

Then open the web page by running the code in the project folder using command line:
### `npm start`
