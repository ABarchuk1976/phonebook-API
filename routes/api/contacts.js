const express = require('express');
const route = express.Router();

const { schemas } = require('../../models/contacts');
const { auth, ctrlWrapper, validation, isExistId } = require('../../middlewares');
const { contacts: ctrl} = require('../../controllers');

route.use(auth);

route.get(
	"/",
	ctrlWrapper(ctrl.list)
)

route.post(
	"/",
	validation(schemas.dataContactSchema),
	ctrlWrapper(ctrl.add)
)

route.use('/:id', isExistId)

route.patch(
	"/:id",
	validation(schemas.dataContactSchema),
	ctrlWrapper(ctrl.update)
)

route.delete(
	"/:id",
	ctrlWrapper(ctrl.remove)
)

module.exports = route;