it('should list ALL scores on /score GET', function(done) {
	chai.request(app)
		.get('/score')
    .end(function(err, res){
    	res.should.have.status(200);
			res.body.should.be.a('array');
      done();
    });
});


it('should POST a case on /score', (done) => {
	let submission = {
	  "case":1,
	  "solutions":[
	    {
	      "contestant":1,
	      "problem":2,
	      "time":10,
	      "type":"I"
	    },
	    {
	      "contestant":1,
	      "problem":1,
	      "time":15,
	      "type":"C"
	    }
	  ]
	}

	chai.request(app)
  	.post('/score')
    .send(submission)
    .end((err, res) => {
    	res.should.have.status(201);
      done();
  });
});


it('should not POST a case on /score with contestant greater that 100', (done) => {
	let submission = {
	  "case":1,
	  "solutions":[
	    {
	      "contestant":101,
	      "problem":2,
	      "time":10,
	      "type":"I"
	    },
	    {
	      "contestant":1,
	      "problem":1,
	      "time":15,
	      "type":"C"
	    }
	  ]
	}

	chai.request(app)
  	.post('/score')
    .send(submission)
    .end((err, res) => {
    	res.should.have.status(500);
      done();
  });
});

it('should not POST a case on /score with problem greater that 9', (done) => {
	let submission = {
	  "case":1,
	  "solutions":[
	    {
	      "contestant":1,
	      "problem":10,
	      "time":10,
	      "type":"I"
	    },
	    {
	      "contestant":1,
	      "problem":1,
	      "time":15,
	      "type":"C"
	    }
	  ]
	}

	chai.request(app)
  	.post('/score')
    .send(submission)
    .end((err, res) => {
    	res.should.have.status(500);
			res.body.should.be.a('object');
      done();
  });
});
