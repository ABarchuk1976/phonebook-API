const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwtToken = require('../helpers/jwtToken');
const Joi = require('joi');

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: [true, "Set password for user"],
		},
		token: {
			type: String,
			default: null,
		},
	},
	{ versionKey: false, timestamps: true }
);

userSchema.methods.setPassword = async function(password) {
	this.password = await bcrypt.hash(password, 10);
}

userSchema.pre('save', function (next) {
	if (!this.isModified()) {
		return next();
	}

	this.password = this.setPassword(this.password);
	next();
});

userSchema.post('validate', function (_, next) {
	if (this.isNew) {
		this.token = jwtToken.tokenCreate(this._id);
	}

	next();
})

const registerSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(7).required(),
});

const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(7).required(),
});

const loginTokenSchema = Joi.object({
	token: Joi.string().required(),
});

const schemas = {
	registerSchema,
	loginSchema,
	loginTokenSchema,
}

const User = model('user', userSchema);

module.exports = {schemas, User};








