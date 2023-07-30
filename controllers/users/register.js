const { Conflict } = require('http-errors');

const { jwtToken } = require('../../helpers');
const { User } = require('../../models');

const register = async (req, res) => {
	const { name, email, password } = req.body;

	const user = await User.findOne({email});

	if (user) {
		throw new Conflict("Email in use");
	}

	const newUser = new User({name, email, password});
	await newUser.setPassword(password);

	const token = jwtToken.tokenCreate(newUser._id);

	newUser.token = token;

	newUser.save();

	return res.status(201).json(newUser);
}

module.exports = register;