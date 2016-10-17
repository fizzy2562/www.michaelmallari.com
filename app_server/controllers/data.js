// GET Data landing page - http://www.michaelmallari.com/data
module.exports.index = function(req, res, next) {
	res.render('data', {
		html: {
			head: {
				title: 'Data (thinking + doing) | Michael Mallari, MBA, CSPO, CSM',
				description: 'During CS studies, Michael learned and developed a strong foundation in data, databases, and ER modeling. He continued his interests in data, models, and data-driven decison-making during his MBA studies.',
				canonical: 'http://www.michaelmallari.com/data'
			},
			body: {
				class: 'data'
			}
		}
	});
};
