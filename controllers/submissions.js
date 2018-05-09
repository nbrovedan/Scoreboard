module.exports = (app) => {
	const submissionModel = app.models.submissions.model;
	const solutionsModel = app.models.solutions.model;

	const _save = (req, res) => {

		let submission = new submissionModel(req.body);

		submission.save((err, result) => {
			if (err) {
				res.status(500).end(err.message);
			}else{
				res.sendStatus(201);
			}
			
		});
	}

	const _getAll = (req, res) => {
		submissionModel.aggregate([
			{
				$unwind: '$solutions'
			},
			{
				$match: {
					'solutions.type': {$in: ['C','I']}
				}
			},
			{
				$group: {
					_id: '$solutions.contestant',
					total_penalty: {
						$sum: '$solutions.time'
					},
					problems_solved: {
						$sum: {
							$cond: [ { $eq: [ '$solutions.type', 'C' ] }, 1, 0 ]
						}
					}
				}
			},
			{ $project: {  
			      _id: 0,
			      contestant: '$_id',
			      total_penalty: '$total_penalty',
			      problems_solved: '$problems_solved'
			   }
			},
			{
				$sort: {
					problems_solved: -1,
					total_penalty: -1
				}
			}
		], (err, result) => {
			res.json(result);
		});
		
	}

	return {
		save: _save,
		getAll : _getAll
	}
}