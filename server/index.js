// import required packages
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const auth = require("./routes/auth.routes")

// initialise express app
const app = express()

// routes and middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.use(require("./routes/students.routes"))
app.use("/auth", auth)

// start the app
app.listen(8000, () => console.log(`server running on http://localhost:8000`))