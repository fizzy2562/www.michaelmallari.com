// GET home page - http://www.michaelmallari.com
module.exports.home = function(req, res, next) {
	res.render('home', {
		html: {
			head: {
				title: 'Michael Mallari, MBA, CSPO, CSM | Hybrid thinker + doer',
				description: 'Hybrid product manager, designer, and developer. Launched digital products for American Express, Ford, Hasbro, Marriott, Marvel, Ralph Lauren, and others.',
				canonical: 'http://www.michaelmallari.com'
			}
		}
	});
};
