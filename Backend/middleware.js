const JWT_SECRET = require("./config")
const jwt = require('jsonwebtoken')

const authomiddleware = (req, res, next) => {

    const authHead = req.headers.authorization
    console.log(authHead);
    console.log(req.headers);

    if (!authHead || !authHead.startsWith('Bearer ')) {
        return res.json({})
    }
    const token = authHead.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if (decoded.userId) {
            req.userId = decoded.userId;
            next();
        } else {
            return res.status(401).json({ message: "Invalid token structure" });
        }

    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }

}

module.exports = {
    authomiddleware
}