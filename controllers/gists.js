import http from 'http';
import request from 'request';
import config from '../config/config.js';

module.exports = (app) => {

	const gistsModel = app.models.gists.model;

	const _create = (req, res) => {

		if(!req.body || !req.body.files){
			res.sendStatus(412).end();
		}else{
			let options = { 
				method: 'POST',
	  			url: 'https://api.github.com/gists',
	  			headers: { 
	  				'Cache-Control': 'no-cache',
	     			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:59.0) Gecko/20100101 Firefox/59.0',
	     			Authorization: 'Basic ' + Buffer.from(config.github.user + ':' + config.github.pass).toString('base64') 
	     		},
	  			body: JSON.stringify(req.body) 
	  		};

			request(options, function (error, response, body) {
			  if (error) {
			  	res.sendStatus(500).end(error);
			  }else{
			  	body = JSON.parse(body);

			  	let gist = new gistsModel({
			  		gist_id: body.id,
			  		description: body.description,
			  		files: body.files
			  	});

				gist.save((err, result) => {
					if (err) {
						res.status(500).end(err.message);
					}else{
						res.sendStatus(201);
					}
				});
			  }
			});
		}
	}

	const _getComments = (req, res) => {

		if(!req.params || !req.params.id){
			res.sendStatus(400).end();
		}else{
			let options = { 
				method: 'GET',
			  	url: 'https://api.github.com/gists/' + req.params.id + '/comments',
			  	headers: { 
			  		'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:59.0) Gecko/20100101 Firefox/59.0',
			     	'Cache-Control': 'no-cache' 
			     } 
			 };

			request(options, function (error, response, body) {
			  	if (error){
			  		res.sendStatus(500).end(error);
			  	} else {
			  		res.json(JSON.parse(body));
			  	}
			});
		}
	}

	return {
		create: _create,
		getComments: _getComments
	}
}

