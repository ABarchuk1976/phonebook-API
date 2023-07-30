const { User } = require('../../models');

const logout = async (req, res) => {
	const { _id } = req.user;

	await User.findByIdAndUpdate(_id, {token: null}, {new: true});

	res.status(200).json({message: "User logout"});
}

module.exports = logout;