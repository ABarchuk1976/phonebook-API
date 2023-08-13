const {Schema, model, Types} = require('mongoose');
const Joi = require('joi');

const contactsSchema = new Schema(
	{
	name: {
		type: String,
		required: [true, 'Set name for contact'],
	},
	number: {
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

const dataContactSchema = Joi.object({
	name: Joi.string().required(),
	number: Joi.string(),
})

const schemas = {
	dataContactSchema,
}

module.exports = {schemas, Contact};


