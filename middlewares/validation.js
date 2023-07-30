const HttpError = require('../helpers');

const validate = (scheme) => {
	return (req, _, next) => {
		const {error} = scheme.validate(req.body);

		if (error) {
			next(HttpError(400, error.message))
		}

		next();
	}
}

module.exports = validate;