// GET Home page - http://www.michaelmallari.com
module.exports.home = function(req, res, next) {
	res.render('home', {
		html: {
			head: {
				title: 'Michael Mallari, MBA, CSPO, CSM | Hybrid thinker + doer',
				description: 'Hybrid product manager, designer, and developer. Launched digital products for American Express, Ford, Hasbro, Marriott, Marvel, Ralph Lauren, and others.',
				canonical: 'http://www.michaelmallari.com'
			}, body: {
				class: 'home'
			}
		}
	});
};





// GET About page - http://www.michaelmallari.com/about
module.exports.about = function(req, res, next) {
	res.render('default', {
		html: {
			head: {
				title: 'About Michael Mallari, MBA, CSPO, CSM',
				description: 'Michael leverages over 15 years of product, design, and engineering experience to deliver delightful digital customer experiences that align with business goals.',
				canonical: 'http://www.michaelmallari.com/about'
			}, body: {
				class: 'default'
			}
		}
	});
};
