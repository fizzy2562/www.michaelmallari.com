var request = require('request');
var requestOptions = {
	url: 'https://someurl.com',
	method: "GET",
	json: {},
	qs: {}
}
var section_hands_on = {
	heading: 'Not affraid of getting dirty in the proverbial garage',
	copy: 'While Michael has held cushy corporate jobs, he is also no stranger to being lean and scrappy. He has spent many hours in the “coffice”—building (coding and designing) and validating startup/product ideas. Heres a list of entrepreneurial ventures he has been involved in:',
	logos: [
		{  name: 'SQL', alias: 'sql' },
		{  name: 'Python', alias: 'python' },
		{  name: 'NumPy', alias: 'numpy' },
		{  name: 'SciPy', alias: 'scipy' },
		{  name: 'TensorFlow', alias: 'tensorflow' },
		{  name: 'D3', alias: 'd3'  }
	]
}








// GET Data landing page - http://www.michaelmallari.com/data/
module.exports.index = function(req, res, next) {
	res.render('data', {
		meta: {
			title: 'Data-driven thinking + doing',
			description: 'During his undergraduate studies in CS, Michael developed a solid foundation in data, databases, and ER modeling. He continued his interests in data, models, and data-driven decison-making during his MBA studies.',
			url_base,
			url_path: '/data/'
		},
		content: {
			section_hands_on
		}
	});
};








// GET Data landing page - http://www.michaelmallari.com/data/lottery-ny-take5/
var renderTake5 = function(req, res, responseBody) {
	res.render('data-lottery-ny-take5', {
		meta: {
			title: 'Analytics tool for Take 5 (New York State) lottery drawings',
			description: 'With a 1:575,757 chance of winning the New York State Take 5 lottery jackpot, this tool helps you increase your odds of winning.',
			url_base,
			url_path: '/data/lottery-ny-take5/'
		},
		// JSON-formatted data from NY Open Data - Take 5 winning numbers
		drawings: responseBody
	});
};
module.exports.take5 = function(req, res, next) {
	var requestOptions;
	requestOptions = {
		url: 'https://data.ny.gov/resource/hh4x-xmbw.json?$$app_token=5STaLX41TI9rRUSlhpcKTgToH',
		method: "GET",
		json: {},
		qs: {}
	};
	request(
		requestOptions,
		function(err, response, body) {
			renderTake5(req, res, body);
		}
	);
};