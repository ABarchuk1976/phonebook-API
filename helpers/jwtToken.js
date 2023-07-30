const jwt = require('jsonwebtoken');

const {JWT_SECRET, JWT_EXPIRES_IN} = process.env;

const jwtToken = {
	tokenCreate: (payload) => jwt.sign({ payload }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN}),
	tokenVerify: (token) => jwt.verify(token, JWT_SECRET),
}

module.exports = jwtToken;