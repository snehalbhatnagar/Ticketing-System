# Ticketing System
This project utilises MySQL, HTML, CSS, NodeJS and ReactJS to create an application that enables emloyees of an organisation to login and logout, generate, update and delete tickets in order to keep track of the issues faced by the users and have them rectified efficiently.   

ReactJS has been used to render the front-end while NodeJS has been used to create the back-end which holds all the data. MySQL is the RDBMS used.

## Project Setup
To set up the project you will have to install all the node modules.
````
$ cd app
$ npm install
$ cd ../server
$ npm install
````
### MySQL Database Setup
Using the ***ticket_db_dump.sql*** file, import database in your MySQL server. Two records containing valid empolyee IDs and passwords are already present , use either of them to login.

Edit the backend\config\database.js file according to your MySQL server configuration.
````
import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db', 'snehal', 'snehal@123', {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});
db.sync({});
export default db;
````
### Running the Project
For this to work you need to have both the NodeJS server and the ReactJS project running.
#### Starting the Server 
````
$ node index.js
````
#### Starting the App
````
$ npm start
````
