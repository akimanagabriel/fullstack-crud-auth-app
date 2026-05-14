const auth = require("express").Router();
const db = require("../config/db")
const bcrypt = require("bcrypt")
const authMiddleware = require("../middleware/auth.middleware")

// registration POST
async function hashPassword(password) {
    return await bcrypt.hash(password, 10)
}
auth.post("/register", async (req, res) => {
    const { email, names, password } = req.body
    const hashedPassword = await hashPassword(password)
    db.query("INSERT INTO users (names,email, password) VALUES (?,?,?)", [names, email, hashedPassword])
    res.status(201).json({ message: "New user is created" })
})



// login POST
auth.post("/login", (req, res) => {
    // read data from db
    const { email, password } = req.body
    db.query("SELECT * FROM users WHERE email = ?", [email], async (error, [result]) => {
        if (error) return res.status(500).json({ error })
        // verify if we have a user
        if (!result) return res.status(401).json({ message: "Email not found" })
        // compare passwords
        const isPasswordMatching = await bcrypt.compare(password, result.password)
        if (!isPasswordMatching) return res.status(401).json({ message: "Incorrect password" })

        // const { password: p, ...user } = result
        delete result.password
        req.session.user = result
        return res.json({ message: "Logged in success" })
    })

    // compare hashed with plain
})

// logout POST
auth.post("/logout", authMiddleware, (req, res) => {
    req.session.destroy()
    res.json({ message: "You are logged out" })
})

// get current authenticated user GET
auth.get("/user", authMiddleware, (req, res) => {
    res.json(req.session.user)
})

module.exports = auth