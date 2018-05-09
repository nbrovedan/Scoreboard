import mongoose from 'mongoose';
import config from '../config/config.js';

const env = process.env.NODE_ENV || 'dev';
const dbconfig = config.db[env.trim()];

mongoose.connect('mongodb://' + dbconfig.user + ':' + dbconfig.pass + '@ds215380.mlab.com:15380/' + dbconfig.database);

module.exports = mongoose;
