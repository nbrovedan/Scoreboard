import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';
import config from '../config/config.js';

chai.use(chaiHttp);

global.app = app;
global.chai = chai;
global.config = config;
global.should = chai.should();
