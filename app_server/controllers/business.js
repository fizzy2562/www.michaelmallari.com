// GET Business landing page - http://www.michaelmallari.com/business
module.exports.index = function(req, res, next) {
	res.render('business', {
		html: {
			head: {
				title: 'Business (thinking + doing) | Michael Mallari, MBA, CSPO, CSM',
				description: '',
				canonical: 'http://www.michaelmallari.com/business'
			}
		}
	});
};
