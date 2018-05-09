it('should list ALL comments from gists GET on /gist', function(done) {
	chai.request(app)
		.get('/gist/b6365e79be6052e7531e7ba6ea8caf23')
    .end(function(err, res){
    	res.should.have.status(200);
			res.body.should.be.a('array');
      done();
    });
});

it('should create new gist POST on /gist', (done) => {
	let gist = {
	  "description": "Some file description",
	  "public": true,
	  "files":{
	    "TestFile.txt":{
	      "content":"Some file content"
	    }
	  }
	}

	chai.request(app)
  	.post('/gist')
    .send(gist)
    .end((err, res) => {
    	res.should.have.status(201);
      done();
  });
});

it('should not create new gist POST on /gist without files', (done) => {
	let gist = {
	  "description": "Some file description",
	  "public": true
	}

	chai.request(app)
  	.post('/gist')
    .send(gist)
    .end((err, res) => {
    	res.should.have.status(412);
      done();
  });
});
