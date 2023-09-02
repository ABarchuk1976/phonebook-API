const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const refreshToken = require('./refreshToken');
const currentUser = require('./currentUser');

module.exports = {
	register,
	login,
	logout,
	refreshToken,
	currentUser,
}