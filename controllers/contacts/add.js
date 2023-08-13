const { Contact } = require('../../models');

const add = (req, res) => {
	try {
		const { body, user } = req;

		body.owner = user;

		const newContact = new Contact(body);

		newContact.save();

		const {_id: id, name, phone: number, owner} = newContact;

		res.status(201).json({id, name, number, owner});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = add;