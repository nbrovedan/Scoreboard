module.exports = (app) => {
	const db = app.db.db;

	const solutionSchema = new db.Schema({
		contestant: {
			type: Number,
			required: [true,'Constestant is required'],
			min: [1,'The smallest contestant\'s number is 1'],
			max: [100, 'The biggest contestant\'s number is 100']
		},
		problem: {
			type: Number,
			required: [true,'Problem is required'],
			min: [1,'The smallest problem\'s number is 1'],
			max: [9, 'The biggest problem\'s number is 9']
		},
		time: {
			type: Number,
			required: [true,'The time of resolution is required']
		},
		type: {
			type: String,
			enum: ['C','I','R','U','E']
		}
	},
	{ timestamps: { createdAt: 'createdAt' } });

	return {
		schema: solutionSchema,
		model: db.model('Solution', solutionSchema)
	}

}