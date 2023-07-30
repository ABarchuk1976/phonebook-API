const { Conflict } = require('http-errors');

const { jwtToken } = require('../../helpers');
const { User } = require('../../models');

const register = async (req, res) => {
	const { name, email, password } = req.body;

	console.log("1. HERE");

	const user = await User.findOne({email});

	console.log("2. User:", user);

	if (user) {
		throw new Conflict("Email in use");
	}

	const newUser = new User({name, email, password});
	await newUser.setPassword(password);

	const payload = newUser._id;

	const token = jwtToken.tokenCreate(payload);

	newUser.token = token;

	newUser.save();

	return res.status(201).json(newUser);
}

module.exports = register;