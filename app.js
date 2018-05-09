import consign from 'consign';
import express from 'express';

let app = express();
 
consign({verbose:false})
.include('libs/middlewares.js')
.then('db')
.then('models')
.then('controllers')
.then('routes')
.then('libs/boot.js')
.into(app);

module.exports = app;