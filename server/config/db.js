const db = require("mysql2")

const conn = db.createPool({
    host: "localhost",
    password: "",
    user: "root",
    database: "fullstack",
})

module.exports = conn