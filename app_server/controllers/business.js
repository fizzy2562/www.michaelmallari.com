if(process.env.NODE_ENV === 'production') {
	url_base = 'http://www.michaelmallari.com';
} else {
	url_base = 'http://localhost:3000';
}


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
