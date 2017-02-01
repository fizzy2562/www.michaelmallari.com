var section_hands_on = {
	heading: 'Geeking out with modern computing technologies.',
	copy: 'With an undergraduate degree in Computer Science from New York Institute of Technology\'s School of Engineering and Computing Sciences and over ten years of professional software engineering experience, Michael has been (and still is) a techie at heart. Here\'s an abbreviated list of technologies he codes with/uses to deploy digital solutions:',
	logos: [
		{  name: 'JavaScript', alias: 'js' },
		{  name: 'Node.js', alias: 'nodejs' },
		{  name: 'Angular', alias: 'angular' },
		{  name: 'NativeScript', alias: 'nativescript' },
		{  name: 'React', alias: 'react' },
		{  name: 'Python', alias: 'python' },
		{  name: 'TensorFlow', alias: 'tensorflow' },
		{  name: 'PHP', alias: 'php', url: '' },
		{  name: 'Git', alias: 'git' },
		{  name: 'GitHub', alias: 'github' },
		{  name: 'AWS', alias: 'aws' },
		{  name: 'Heroku', alias: 'heroku' }
	]
}








// GET Computational landing page - http://www.michaelmallari.com/computational/
module.exports.index = function(req, res, next) {
	res.render('computational', {
		meta: {
			title: 'Computational thinking + doing',
			description: 'Michael developed an interest in CS in high school, pursued a BS degree in CS, and accumulated over ten years of experience as a professional developer.',
			url_base,
			url_path: '/computational/'
		},
		content: {
			section_hands_on
		}
	});
};
