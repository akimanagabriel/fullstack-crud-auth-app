
function authMiddleware(req, res, next) {
    if (req.session.user) {
        next()
    } else {
        res.status(401).json({ message: "Not allowed to access this endpoint" })
    }
}

module.exports = authMiddleware