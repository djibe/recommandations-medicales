if(process.env.HUGO_ENV === 'production') {
	module.exports = {
		plugins: {
			autoprefixer: {}
		}
	}
}
