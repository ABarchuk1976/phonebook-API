const express = require('express');
const route = express.Router();

const { schemas } = require('../../models/contacts');
const { auth, ctrlWrapper, validation} = require('../../middlewares');
const { contacts: ctrl} = require('../../controllers');

route.use(auth);

route.get(
	"/",
	ctrlWrapper(ctrl.list)
)

route.post(
	"/",
	validation(schemas.addContactSchema),
	ctrlWrapper(ctrl.add)
)

route.patch(
	"/:id",
	ctrlWrapper(ctrl.update)
)

route.delete(
	"/:id",
	ctrlWrapper(ctrl.remove)
)

module.exports = route;