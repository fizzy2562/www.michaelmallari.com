var request = require('request');
var requestOptions = {
	url: "https://someurl.com",
	method: "GET",
	json: {},
	qs: {}
}





// Get home page
module.exports.home = function(req, res, next) {
	res.render('home', {
		html: {
			head: {
				title: 'Michael Mallari, MBA, CSPO, CSM | Hybrid thinker and doer',
				description: 'Hybrid product manager, designer, and developer. Launched digital products for American Express, Ford, Hasbro, Marriott, Marvel, Ralph Lauren, and others.',
				canonical: 'http://www.michaelmallari.com'
			}
		}
	});
};




// Get design page
var renderDesign = function(req, res, responseBody) {
	res.render('design', {
		html: {
			head: {
				title: 'Design | Michael Mallari, MBA, CSPO, CSM',
				description: 'Done properly, design can transform businesses and be a source of competitive advantage. And the hallmark of a great designer is the ability to empathize with users through research.',
				canonical: 'http://www.michaelmallari.com/design'
			}
		}, dribbbleShots: responseBody
	});
};
module.exports.design = function(req, res) {
	var requestOptions;
	var dribbbleShotsApi;
	if (process.env.NODE_ENV === 'production') {
		dribbbleShotsApi = process.env.GET_DRIBBBLE_SHOTS;
	}


	requestOptions = {
		url: dribbbleShotsApi,
		method: "GET",
		json: {},
		qs: {}
	};
	request(
		requestOptions,
		function(err, response, body) {
			renderDesign(req, res, body);
		}
	);
};