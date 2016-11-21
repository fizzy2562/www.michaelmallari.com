if(process.env.NODE_ENV === 'production') {
	url_base = 'http://www.michaelmallari.com';
} else {
	url_base = 'http://localhost:3000';
}


// GET Home page - http://www.michaelmallari.com/
module.exports.home = function(req, res, next) {
	res.render('home', {
		html: {
			head: {
				title: 'Hybrid thinker + doer',
				description: 'Hybrid product manager, designer, and developer. Launched digital products for American Express, Ford, Hasbro, Marriott, Marvel, Ralph Lauren, and others.',
				url_path: '/'
			}, body: {
				class: 'home',
				url_base
			}
		}
	});
};





// GET About page - http://www.michaelmallari.com/about/
module.exports.about = function(req, res, next) {
	res.render('default', {
		html: {
			head: {
				title: 'About',
				description: 'Michael leverages over 15 years of product, design, and engineering experience to deliver delightful digital customer experiences that align with business goals.',
				url_path: '/about/'
			}, body: {
				class: 'default',
				url_base
			}
		}
	});
};
