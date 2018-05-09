module.exports = (app) => {
	const submissionController = app.controllers.submissions;
	
	app.route('/score')
		.post(submissionController.save)
		.get(submissionController.getAll);
}