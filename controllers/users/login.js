const { Unauthorized } = require('http-errors');
const bcrypt = require('bcryptjs');

const { jwtToken } = require('../../helpers');
const { User } = require('../../models');

const login = async (req, res) => {
	const { email, password } = req.body;

	const user = User.findOne({email});

	const passwordVerification = bcrypt.compareSync(password, user?.password);

	if (!user || !passwordVerification) {
		throw new Unauthorized("Email or password is wrong");
	}

	const payload = {
		id: user._id
	}

	const token = jwtToken.tokenCreate(payload);

	const updateUser = await User.findByIdAndUpdate(user._id, {token}, {new: true});

	res.status(200).json(updateUser);
}

module.exports = login;