// GET Computational landing page - http://www.michaelmallari.com/computational
module.exports.index = function(req, res, next) {
	res.render('computational', {
		html: {
			head: {
				title: 'Computational (thinking + doing) | Michael Mallari, MBA, CSPO, CSM',
				description: 'Michael developed an interest in CS in high school, pursued a BS degree in CS, and accumulated over ten years of experience as a developer.',
				canonical: 'http://www.michaelmallari.com/computational'
			}
		}
	});
};
