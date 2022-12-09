import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import Routes from './routes/route.js'
const app = express();

const PORT = 8000;
app.use(cors());

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))

app.use('/', Routes);

Connection();

app.listen ( PORT, () => {console.log(`Listening on port ${PORT}`)})