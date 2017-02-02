var request = require('request');
var requestOptions = {
	url: "https://someurl.com",
	method: "GET",
	json: {},
	qs: {}
}
var section_hands_on = {
	heading: 'Impact of high-fidelity and high-interactivity prototypes',
	copy: 'There are two fundementally critical times when you should validate product ideas with customers: before you\'ve built the product and after you\'ve built the product. The higher the fidelity and interactivity, the better the communication and quality of learnings. As a former designer at American Express and Nasdaq, Michael rapidly produces quality design artifacts for both validation and production using the following:',
	logos: [
		{  name: 'Adobe Photoshop', alias: 'photoshop'  },
		{  name: 'Adobe Illustrator', alias: 'illustrator'  },
		{  name: 'Sketch', alias: 'sketch' },
		{  name: 'InVision', alias: 'invision' },
		{  name: 'Framer', alias: 'framer' },
		{  name: 'Flinto', alias: 'flinto' },
		{  name: 'Lingo', alias: 'lingo' },
		{  name: 'Zeplin', alias: 'zeplin' },
		{  name: 'HTML 5', alias: 'html5' },
		{  name: 'CSS 3', alias: 'css3' },
		{  name: 'Bootstrap', alias: 'bootstrap' },
		{  name: 'Sass/Less', alias: 'sass-less' },
	]
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
			section_hands_on
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
