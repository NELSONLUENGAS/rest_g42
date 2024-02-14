const db = require('../database/config');
const { verifyPostExist } = require('../querys');
const { checkSchema } = require('express-validator');

const updatePostMiddleware = async (req, res, next) => {
	const { id } = req.params;
	try {
		if (id) {
			const values = [id];
			const query_result = await db.query(verifyPostExist, values);
			const post = query_result.rows[0];

			if (!post) {
				return res.status(400).json({
					status: 'Bad Request',
					msg: 'El ID no existe',
				});
			} else {
				req.data = {
					postExist: true,
					post,
				};
				next();
			}
		} else {
			return res.status(400).json({
				status: 'Bad Request',
				msg: 'El ID es requerido',
			});
		}
	} catch (error) {
		next(error);
	}
};

const handleGetMiddleware = async (req, res, next) => {
	try {
		const error = await checkSchema(
			{
				limits: {
					isNumeric: true,
					custom: (value, req) => {
						const { limits: limits } = req.query;
						return limits > 0;
					},
				},
			},
			['query']
		).run(req);

		next();
	} catch (error) {}
};

module.exports = {
	updatePostMiddleware,
	handleGetMiddleware,
};
