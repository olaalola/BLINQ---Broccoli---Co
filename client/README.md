# BLINQ CODING CHALLENGE  -Broccolo & Co.

This project was bootstrapped with [Create React App]

Welcome!

This repository is added with `README.md`, `.gitignore`, and `.gitattributes`.

## General info

The page is build with the purpose of leting people request an invitation for the upcoming online service company.

## Detailed function
By clicking on the 'Request an invitation" button, the user would be able to input their name and email details in the pop-up window. The window would ask the visitor to confirm their email again and check with the correctness of the name and email format. After that, the user's info would be send to the database system and receive a '200' response code, otherwise,'400' if something goes wrong. A corresponding notification popup would be showing up when the user submit their details. The user would be able to re-send their details if there is an error in their existing detail inputs.


## In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\


## Other information you may find useful:

If the code cannot run properly on ios system, try to alter line 25: "start": "SET PORT=5000 && react-scripts start" inside front/package.json into "start": "PORT=5000 react-scripts start",

#### Other details:
hardcode email address which would return a '400' response:  usedemail@blinq.app

## Technologies

The page is created with:
- React 17.0.2
Material libraries used:
- Material UI
- ANTD
- react-bootstrap
- react-alert
