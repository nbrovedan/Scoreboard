import mongoose from 'mongoose';
import config from '../config/config.js';

mongoose.connect('mongodb://' + config.db.user + ':' + config.db.pass + '@ds215380.mlab.com:15380/scoreboard_naidion')

module.exports = mongoose;