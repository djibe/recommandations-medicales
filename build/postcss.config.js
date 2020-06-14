'use strict'

const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')

module.exports = {
	plugins: [
		purgecss({
			content: ['public/*.html', '../public/**/*.html', '../public/**/*.js'],
			css: ['public/css/material.min.css'],
			output: ['public/css/output.min.css'],
      whitelist: [
				':hover',
				':focus',
				':focus-within',
				':active',
				':selection',
				'html',
				'body'
      ]
    }),
		autoprefixer({})
		// cssnano({ preset: 'default' })
	]
}