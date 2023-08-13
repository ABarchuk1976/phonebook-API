const express = require('express');
const route = express.Router();

const { schemas } = require('../../models/user');
const { auth, ctrlWrapper, validation} = require('../../middlewares');
const { users: ctrl} = require('../../controllers');

route.post(
	"/register",
	validation(schemas.registerSchema),
	ctrlWrapper(ctrl.register)
)

route.post(
	"/login",
	validation(schemas.loginSchema),
	ctrlWrapper(ctrl.login)
)

route.use(auth);

route.post(
	"/logout",
	ctrlWrapper(ctrl.logout)
)

route.get(
	"/current",
	ctrlWrapper(ctrl.refreshToken)
)

module.exports = route;