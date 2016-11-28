// GET Computational landing page - http://www.michaelmallari.com/computational/
module.exports.index = function(req, res, next) {
	res.render('computational', {
		html: {
			head: {
				title: 'Computational thinking + computational doing',
				description: 'Michael developed an interest in CS in high school, pursued a BS degree in CS, and accumulated over ten years of experience as a professional developer.',
				url_path: '/computational/'
			},
			body: {
				class: 'computational',
				url_base
			}
		}
	});
};
