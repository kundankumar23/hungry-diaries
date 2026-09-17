const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const connectDB = require("./config/connectionDB.js")
const cors = require("cors");

const PORT = process.env.PORT || 3000
connectDB()

app.use(express.json());            // It is middleware that parses JSON data sent by the client.
app.use(cors());

app.use("/", require("./routes/user.js"))
app.use("/recipe", require("./routes/recipe.js"))

app.listen(PORT, (err) => {
    console.log(`App is listening on PORT ${PORT}`);
})