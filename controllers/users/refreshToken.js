const { User } = require('../../models');
const { jwtToken } = require('../../helpers');

const refreshToken = async (req, res) => {
	const { _id } = req.user;

	const payload = {
		id: _id,
	}

	const token = jwtToken.tokenCreate(payload);

	await User.findByIdAndUpdate(_id, {token}, {new: true});

	res.status(200).json({token});
}

module.exports = refreshToken;