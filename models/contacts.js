const {Schema, model, Types} = require('mongoose');
const Joi = require('joi');

const contactsSchema = new Schema(
	{
	name: {
		type: String,
		required: [true, 'Set name for contact'],
	},
	phone: {
		type: String,
		default: '',
	},
	owner: {
		type: Types.ObjectId,
		ref: 'user',
	}
},
	{ versionKey: false }
);

const Contact = model('contact', contactsSchema);

const addContactSchema = Joi.object({
	name: Joi.string().required(),
	phone: Joi.string(),
})

const schemas = {
	addContactSchema,
}

module.exports = {schemas, Contact};


