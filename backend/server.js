const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const connectDB = require("./config/connectionDB.js")

const PORT = process.env.PORT || 3000
connectDB()

app.use("/recipe", require("./routes/recipe.js"))

app.listen(PORT, (err) => {
    console.log(`App is listening on PORT ${PORT}`);
})