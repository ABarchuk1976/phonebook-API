const { HttpError } = require('../helpers');

const { User } = require('../models/user');
const { jwtToken } = require('../helpers');

const auth = async (req, _, next) => {
	const {authorization = ''} = req.headers;
	const [bearer, token] = authorization.split(' ');

	try {
		if (bearer !== 'Bearer' || !token) {
			throw HttpError(401)
		}

		const { id } = jwtToken.tokenVerify(token);
		const user = await User.findById(id);

		if (!user || !user?.token || user.token !== token) {
			throw HttpError(401)
		}

		req.user = user;

		next();
	} catch (error) {
		next(error);
	}
}

module.exports = auth;