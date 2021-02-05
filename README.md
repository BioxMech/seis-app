# Running the application
Follow these steps below and you will be able to run the application on your local computer
<ol>
  <li>
  Clone the repo on to your computer
  </li>
  <li>
  Open up a terminal (Can be your command prompt or whatever terminal that is provided by your IDE) 
  </li>
  <li>
  Enter "yarn" into the terminal to download all the required dependencies for this project
  <ul><li>** If you do not have json-server on your local computer, you will have to install. Enter <strong>"npm install -g json-server"</strong> into your terminal</li></ul>
  </li>
  <li>
  Once you have downloaded all the required dependencies, in the same terminal, enter <strong>"yarn dev"</strong> and the application + server will be booted up (First time launching it can be slow)
  </li>
  <li>
  Enjoy the application in your browser - <a href="http://localhost:3000/">http://localhost:3000/</a>
  </li>
  <li>
  It uses <a href="https://www.npmjs.com/package/json-server">Json Server</a> to mock the server 
  <br />
  ("npm install -g json-server" to install the required files to launch the mock server on your local computer)
  <ul><li><a href="http://localhost:5000/users/">http://localhost:5000/users</a></li></ul>
  </li>
</ol>

# Additional Information
## Dependencies
<ul>
  <li>
  <a href="https://react-bootstrap.github.io/">React Bootstrap</a> for easier implementation of the application's responsiveness
  </li>
  <li>
  This project was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create React App</a>
  </li>
</ul>

## Unit Testing
I have implemented several unit testing codes in the the file APITest.spec.js to test the API

As for the application itself, I was having some difficulties doing the codes unit testing and it would take awhile for me to learn how to code them , so instead I would document my unit testing here instead. 

Here are the test cases I have tried and tested 
<br />
<strong>(All are working)</strong>:

<ol>
<li>
When first launch the application (Home Page), user list is generated in a table format. (Visual)
  <ul>
  <li>✅ | Create User form at the top</li>
  <li>✅ | First 10 users listed in the table</li>
  <li>✅ | Update and Delete button are present</li>
  <li>✅ | Page number is shown at the bottom</li>
  </ul> 
</li>
<li>
✅ | Fill the create user form > Page refreshes with the new user shown at the bottom of the page if there are < 10 users, otherwise it will be on another page.
  <ul>
  <li>Email address required '@'</li>
  <li>DOB only numbers and only can have 8 characters</li>
  <li>First name and last name must have alphabets otherwise the form cannot be submitted</li>
  </ul>
</li>
<li>
✅ | Search bar filtering by first name
</li>
<li>
✅ | Update button opens a modal for updating the user information that is on the same row
  <ul>
  <li>✅ | You will be able to see the information in their respective text box</li>
  <li>✅ | Not fulfilling any of the form requirements will prevent the update</li>
  <li>✅ | Clicking the update button after keying a different information, page reload and the information is updated as shown on the table</li>
  </ul>
</li>
<li>
✅ | Delete button shows a pop-up confirmation that will be closed in 2 seconds if nothing is selected
  <ul>
  <li>✅ | The entire row of data is deleted from the database (You can check in the db.json file in root directory or simply click <a href="http://localhost:5000/users/">http://localhost:5000/users</a>)</li>
  </ul>
</li>
<li>
✅ | Pagination button at the bottom of the browser is fully functional where each page will show you 10 different users
</li>
</ol>

## Assumptions
There were several assumptions I made due to certain constraints. The following assumptions are:

<ol>
<li>There is only 1 search fill (firstName)
</li>
<li>Users can create duplicate data (The only unique key is the ID which is the Primary Key)</li>
<li>DOB only takes in 8 numbers
</li>
<li>All emails are correct as long as it contains an "@" 
</li>
<li>People would only search for users on the current page
</li>
<li>All form details must be filled in order to create/update a user in the database
</li>
</ol>