module.exports = (app) => {
	const db = app.db.db;

	const gistsSchema = new db.Schema({
		gist_id: {
			type: String,
			required: [true,'Gist ID is required'],
		},
		description: {
			type: String,
			required: [true, 'Description is required']
		},
		files: db.Schema.Types.Mixed,

	},
	{ timestamps: { createdAt: 'createdAt' } });

	return {
		schema: gistsSchema,
		model: db.model('Gists', gistsSchema)
	}

}