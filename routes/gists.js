module.exports = (app) => {
	const gistsController = app.controllers.gists;
	
	app.route('/gist')
		.post(gistsController.create);

	app.route('/gist/:id')
		.get(gistsController.getComments);

}