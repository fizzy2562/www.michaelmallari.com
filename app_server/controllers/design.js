var request = require('request');
var requestOptions = {
	url: "https://someurl.com",
	method: "GET",
	json: {},
	qs: {}
}


// GET Design landing page - http://www.michaelmallari.com/design/
var renderDesign = function(req, res, responseBody) {
	res.render('design', {
		meta: {
			title: 'Design thinking + doing',
			description: 'Done properly, design can transform businesses and be a source of competitive advantage. And the hallmark of a great designer is the ability to empathize with users through research.',
			url_base,
			url_path: '/design/'
		}, 
		content: {
			section_hands_on: {
				heading: 'Not affraid of getting dirty in the proverbial garage',
				copy: 'While Michael has held cushy corporate jobs, he is also no stranger to being lean and scrappy. He has spent many hours in the “coffice”—building (coding and designing) and validating startup/product ideas. Heres a list of entrepreneurial ventures he has been involved in:',
				logos: [
					{  name: 'Adobe Photoshop', alias: 'photoshop'  },
					{  name: 'Adobe Illustrator', alias: 'illustrator'  },
					{  name: 'Lingo', alias: 'lingo' },
					{  name: 'Sketch', alias: 'sketch' },
					{  name: 'InVision', alias: 'invision' },
					{  name: 'Framer', alias: 'framer' },
					{  name: 'Flinto', alias: 'flinto' },
					{  name: 'Zeplin', alias: 'zeplin' },
					{  name: 'HTML 5', alias: 'html5' },
					{  name: 'CSS 3', alias: 'css3' },
					{  name: 'JS', alias: 'js' },
					{  name: 'GitHUb', alias: 'github' }
				]
			}
		},
		// JSON-formatted data from Dribbble API
		dribbbleShots: responseBody
	});
};
module.exports.index = function(req, res) {
	var requestOptions;
	var dribbbleShotsAPI;
	// if (process.env.NODE_ENV === 'production') {
		dribbbleShotsAPI = process.env.GET_DRIBBBLE_SHOTS;
	// }


	requestOptions = {
		url: dribbbleShotsAPI,
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
