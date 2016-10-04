module.exports.home = function(req, res, next) {
	res.render('index', {
		html: {
			head: {
				title: 'Michael Mallari, MBA, CSPO, CSM',
				description: 'Hybrid product manager, designer, and developer. Launched digital products for American Express, Ford, Hasbro, Marriott, Marvel, Ralph Lauren, and others.',
				canonical: 'http://www.michaelmallari.com'
			}
		}
	});
};