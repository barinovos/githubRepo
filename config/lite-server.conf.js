const helpers = require('./helpers');
const PORT = process.env.PORT || 8080;

module.exports = {
	port: PORT,
	open: false,
	logLevel: "silent",
	server: {
		baseDir: helpers.root('build'),
		middleware: {
			0: null
		}
	}
};
