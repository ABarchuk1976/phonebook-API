const { Conflict } = require('http-errors');

const { Contact } = require('../../models');

const getById = async(req, res) => {
	try {
		const { id } = req.params;
		const { user } = req.user;

		const contact = await Contact.findOne({_id: id, owner: user});

		if (!contact) {
			throw new Conflict('Contact did not found.')
		}

		res.status(200).json(contact);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = getById;