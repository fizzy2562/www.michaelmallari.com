if(process.env.NODE_ENV === 'production') {
	url_base = 'http://www.michaelmallari.com';
} else {
	url_base = 'http://localhost:3000';
}


// GET Data landing page - http://www.michaelmallari.com/data/
module.exports.index = function(req, res, next) {
	res.render('data', {
		html: {
			head: {
				title: 'Data [thinking + doing]',
				description: 'During his undergraduate studies in CS, Michael developed a solid foundation in data, databases, and ER modeling. He continued his interests in data, models, and data-driven decison-making during his MBA studies.',
				url_path: '/data/'
			},
			body: {
				class: 'data',
				url_base
			}
		}
	});
};
