const jwt = require('jsonwebtoken');
const JWT_SECRET = 'damnHot'

// henerate JWT 
exports.generateToken = (id, email) => {
    return jwt.sign({ id, user_email: email }, JWT_SECRET, {
        expiresIn: '30d'
    });
}