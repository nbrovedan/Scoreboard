module.exports = (app) => {
	if((process.env.NODE_ENV || 'dev').trim() !== 'test'){
		app.listen(app.get('port'), () => {
			console.log('Listening on port 8080...');
		});
	}
};
