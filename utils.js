const jwt = require('jsonwebtoken');
const JWT_SECRET = 'damnHot'

// henerate JWT 
exports.generateToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, {
        expiresIn: '30d'
    });
}