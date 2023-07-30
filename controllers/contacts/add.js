const { Contact } = require('../../models');

const add = (req, res) => {
	try {
		const { body, user } = req;

		body.owner = user;

		const newContact = new Contact(body);

		newContact.save();

		res.status(201).json(newContact);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = add;