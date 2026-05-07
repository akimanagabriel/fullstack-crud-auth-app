const router = require("express").Router()
const db = require("../config/db")

// create new student
router.post("/students", (req, res) => {
    const { names, email, phone, grade } = req.body
    const sql = "INSERT INTO students (names, email, phone, class) VALUES (?,?,?,?)"
    db.query(sql, [names, email, phone, grade], (err, data) => {
        res.json(data)
    })
})

// read all students
router.get("/students", (req, res) => {
    db.query("SELECT * FROM students", (error, data) => {
        res.json(data)
    })
})

// delete student
router.delete("/students/:id", (req, res) => {
    const sql = `delete from students where id =?`
    // const id = req.params.id 
    const { id } = req.params
    db.query(sql, [id], (error, data) => {
        res.json(data)
    })
})

// get single student
router.get("/students/:id", (req, res) => {
    db.query("SELECT * FROM students WHERE id = ?", [req.params.id], (error, result) => {
        res.json(result[0])
    })
})


// update a student
router.put("/students/:id", (req, res) => {
    const { names, email, phone, grade } = req.body
    const { id } = req.params
    db.query("UPDATE students SET names = ?, email = ?, phone =?, class=? WHERE id = ?", [
        names, email, phone, grade, id
    ])

    return res.json("updated")
})


module.exports = router