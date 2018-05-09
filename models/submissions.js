module.exports = (app) => {
	const db = app.db.db;
	const solutions = app.models.solutions;

	const submissionSchema = new db.Schema({
		case: {
			type: Number,
			required: [true,'Case is required']
		},
		solutions: [solutions.schema]
	},
	{ timestamps: { createdAt: 'createdAt' } });

	submissionSchema.pre('save', function(next){
		this.solutions.forEach((solution) => {
			if(solution.type == 'I'){
				solution.time = 20;				
			};
		});

		next();
	});

	const submissionModel = db.model('Submissions', submissionSchema);

	return {
		schema: submissionModel,
		model: submissionModel
	}
}


