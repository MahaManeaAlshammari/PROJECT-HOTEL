require('dotenv').config()
const express = require("express")
const cors = require("cors")

require("./db/db");

const hotelsModel = require("./db/models/hotelModel")

const app = express()
app.use(express.json());
app.use(cors());
const port = 5000
///////////

const hotelRoute = require("./Routers/routes/hotelRoute")
const signUpRoute = require("./Routers/routes/signUpRoute")
const loginRoute  = require("./Routers/routes/loginRoute")
const  userRoute = require("./Routers/routes/userRoute")
const bookRoute = require("./Routers/routes/bookRoute")
app.use(hotelRoute)
app.use(signUpRoute)
app.use(loginRoute)
app.use(userRoute)
app.use(bookRoute)

///////////
app.listen( process.env.PORT , ()=>{
    console.log("server is runing on Port : " + process.env.PORT);
})


