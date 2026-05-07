// import required packages
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

// initialise express app
const app = express()

// routes and middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.use(require("./routes/students.routes"))

// start the app
app.listen(8000, () => console.log(`server running on http://localhost:8000`))