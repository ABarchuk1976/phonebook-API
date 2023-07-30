const { isValidObjectId } = require('mongoose');

const { HttpError } = require('../helpers');
const { Contact } = require('../models')

const isExistId = async (req, _, next) => {
	const { id } = req.params;

	if (!isValidObjectId(id)) {
		next(HttpError(404));
	}

	const contact = await Contact.findById(id);

	console.log("0. contact: ", contact);

	if (!contact) {
		next(HttpError(400));
	}

	next();
} 

module.exports = isExistId;