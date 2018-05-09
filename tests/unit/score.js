const submissionModel = app.models.submissions.model;

it('should save an object in database', (done) => {
  let submission = new submissionModel({
    "case":1,
    "solutions":[
      {
        "contestant":1,
        "problem":2,
        "time":10,
        "type":"I"
      }
    ]
  });
  submission.save((err) => {
    if(err) { throw new Error(err.message); }
    return done();
  });
});

it('should don´t save an object in database', (done) => {
  let submission = new submissionModel({
    "case":1,
    "solutions":[
      {
        "problem":2,
        "time":10,
        "type":"I"
      }
    ]
  });
  submission.save((err) => {
    if(err) { return done(); }
    throw new Error(err.message);
  });
});
