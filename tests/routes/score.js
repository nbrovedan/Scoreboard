it('should list ALL scores on /score GET', function(done) {
	chai.request(app)
    	.get('/score')
    	.end(function(err, res){
      		res.should.have.status(200);
      	done();
    	});
});
