const { Contact } = require('../../models');

const list = async (req, res) => {
	try {
		const { user } = req;
		const contactList = await Contact.find({owner: user});

		res.status(200).json(contactList);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = list;