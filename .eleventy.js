module.exports = (config) => {
	return {
		dir: {
			input: 'src',
			output: 'public',
		},
		templateFormats: ['html', 'md', 'njk'],
		markdownTemplateEngine: 'njk',
		htmlTemplateFormats: 'njk',
	};
};
