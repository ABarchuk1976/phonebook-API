const { Contact } = require('../../models');

const list = async (req, res) => {
	try {
		const { user } = req;
		const contactList = await Contact.find({owner: user});

		const normalizedContactList = contactList.map(({_id: id, name, number, owner}) => ({id, name, number, owner}));

		res.status(200).json(normalizedContactList);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = list;