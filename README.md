# Scoreboard

This project is a tech test for Node.js back-end developer.

## Getting Started

With the following instructions, you will have a copy of the project running on your local machine. See below how to do a copy and run the project.

### Prerequisites

You need to have these softwares to run the project on your computer
```
Node
NPM
Nodemon
Git
Postman - opitional for testing
```

### Installing

To download and run the software, follow the steps below.
```
git clone https://github.com/nbrovedan/Scoreboard.git
npm install
npm run nodemon
```

### Configuring

Access `config.js` file in `config` folder and change github `user` and `pass`.   

## Running the tests

For running some tests, import `postman_collection.json` file in Postman and Run collections, or follow the steps below.
```
npm test
```

### API documentation

#### Methods
Endpoint | Description
------------ | -------------
[`POST /score`](./docs/post_score.md) | Send case solutions
[`GET /score`](./docs/get_score.md) | Get ranking of contestants
[`POST /gist`](./docs/post_gist.md) | Create a new gist
[`GET /gist/{id}`](./docs/get_gist.md) | Get gist comments 
