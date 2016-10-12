var request = require('request');
var requestOptions = {
	url: "https://someurl.com",
	method: "GET",
	json: {},
	qs: {}
}





// GET Design landing page - http://www.michaelmallari.com/design
var renderDesign = function(req, res, responseBody) {
	res.render('design', {
		html: {
			head: {
				title: 'Design (thinking + doing) | Michael Mallari, MBA, CSPO, CSM',
				description: 'Done properly, design can transform businesses and be a source of competitive advantage. And the hallmark of a great designer is the ability to empathize with users through research.',
				canonical: 'http://www.michaelmallari.com/design'
			}
		},
		// JSON-formatted data from Dribbble API
		dribbbleShots: responseBody
	});
};
module.exports.design = function(req, res) {
	var requestOptions;
	var dribbbleShotsApi;
	// if (process.env.NODE_ENV === 'production') {
		dribbbleShotsApi = process.env.GET_DRIBBBLE_SHOTS;
	// }


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
