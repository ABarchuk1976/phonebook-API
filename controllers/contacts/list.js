const { Contact } = require('../../models');

const list = async (req, res) => {
	try {
		const { user } = req;
		const contactList = await Contact.find({owner: user});

		const normolizedContactList = contactList.map(({_id: id, name, phone: number, owner}) => ({id, name, number, owner}));

		res.status(200).json(normolizedContactList);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = list;