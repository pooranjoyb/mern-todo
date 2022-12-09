import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const PASSWORD = process.env.DB_PASSWORD;
const USERNAME = process.env.DB_USERNAME;

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.qi2xg2m.mongodb.net/mern-todo?retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URI);

    mongoose.connection.on('connected', () => {
        console.log("Database connected succesfully")
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Database Disconnected");
    })

    mongoose.connection.on('error', () => {
        console.log('Error connecting the database');
    })
} 

export default Connection;