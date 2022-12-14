//nodemon installed
//express installed
// Put npm run start or npm run dev to start the server
// Press Ctrl+C to end the server in terminal
// mongoose installed
//dotenv installed

const express = require("express");
const dotenv = require("dotenv"); // requiring .env
const DbConnection = require("./DBConnection"); //Database connection

dotenv.config();//calling / using .env

const PORT = 8081;
const app = express();

DbConnection(); // calling DbConnection

app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).json({
        message: "Server is up and running",
    });
});

app.get('*', (req,res) => {
    res.status(404).json({
        "message" : "Request/Route not found",
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});