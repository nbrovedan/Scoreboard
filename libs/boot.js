module.exports = (app) => {
	app.listen(app.get('port'), () => {
		console.log('Listening on port 8080...');
	});
};