const { Contact } = require('../../models');

const remove = async (req, res) => {
	try {
		const { id } = req.params;

	await Contact.findByIdAndDelete(id);

	res.status(200).json({massage: 'Contact deleted.'});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = remove;