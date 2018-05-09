import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import methodOverride from 'method-override';

module.exports = (app) => {

	app.set('port',8080);
  	app.use(bodyParser.json());
  	app.use(express.static(path.join(__dirname, 'public')));
  	app.use(helmet());
  	app.use(compression());
	app.use(cors());
	app.use(methodOverride());

};