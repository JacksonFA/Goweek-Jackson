const express = require('express');

const routers = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

routers.get('/tweets', TweetController.index);
routers.post('/tweets', TweetController.store);
routers.post('/likes/:id', LikeController.store);

module.exports = routers;