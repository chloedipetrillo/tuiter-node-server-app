import express from 'express';
import cors from 'cors'
import mongoose from "mongoose";


import HelloController
    from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";


const app = express();
app.use(cors())
app.use(express.json());
TuitsController(app)
HelloController(app);
UserController(app);
// 'mongodb://127.0.0.1:27017/tuiter'
//
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/tuiter'
console.log(process.env.DB_CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING);


app.listen(process.env.PORT || 4000);

