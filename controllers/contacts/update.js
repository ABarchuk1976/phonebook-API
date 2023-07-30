const { Contact } = require('../../models');

const update = async (req, res) => {
	try {
		const { id } = req.params;

		const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {new: true});

		res.status(200).json(updatedContact);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = update;