const mongoose = require('mongoose');
const app = require('./app');

const { MONGO_URL, PORT = 3000 } = process.env;

mongoose
	.connect(MONGO_URL)
	.then(()=> {
		console.log("Mongo DB successfully connected..")
	})
	.catch((err) => {
		console.error(err);

		process.exit(1);
	});

app.listen(PORT, () => {
	console.log(`Server running. Use our API on port: ${PORT}`);
})