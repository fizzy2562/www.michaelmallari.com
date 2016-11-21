// GET Business landing page - http://www.michaelmallari.com/business/
module.exports.index = function(req, res, next) {
	res.render('business', {
		html: {
			head: {
				title: 'Business [thinking + doing]',
				description: '',
				url_path: '/business/'
			}, body: {
				class: 'business',
				url_base
			}
		}
	});
};
