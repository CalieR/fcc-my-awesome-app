# FCC React / Node + Express walkthrough

Following a guide for setting up a React frontend, Node/Express API (backend) and connecting them

https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

### Steps

Started by creating a folder, cd into that folder.

1. Create a React app

- Used npm’s npx to create a react app and named it client.
- cd(change directory) into the client directory.
- Started the app.

2. Create an Express app

- Used npm’s npx to install express-generator globally.
- Used express-generator to create an express app and named it api.
- cd into the API directory.
- Installed all dependencies.
- Started the app.

3. Configure a new route in the Express API

- In bin/www changed port from 3000 to 9000 to run both apps at once without conflict.
- Added a testAPI.js file in routes folder.
- Instructed Express to use this route in app.js
- Checked the route was working by starting the app and navigating to localhost:9000/testAPI

4. Connecting the React Client to the Express API

- Changed client App component from functional to class
- Inserted a constructor, that initializes the default state.
- Inserted the method callAPI() that will fetch the data from the API and store the response on this.state.apiResponse.
- Inserted componentDidMount(), to execute the callAPI() method.
- Used the <;p> tag to display a paragraph on client page, with the text retrieved from the API.
- cd into api directory and install cors.
- require it into api/app.js and tell Express to use it in same file.

### Next

Try and find out how to add a PostgreSQL db to this project