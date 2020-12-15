/* const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: ['./public/*.html']
    })
  ]
} */

if(process.env.NODE_ENV === 'production') {
	module.exports = {
		plugins: {
			autoprefixer: {}
		}
	}
}