const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    build : ['babel-polyfill','./src/Type/_build.js'],    
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js',
  },
  module: {
  	rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      options: {
			  "presets" : [
			  	["env",{
			  	  "targets" : {
			  	  	"browsers" : ["last 2 versions", "ie >= 11"]
			  	  },
			  	  "debug":true,
			      "modules": false,
			      "useBuiltIns": true
			  	}],	
			  ],
			  "plugins" : [
			    //require("babel-plugin-transform-runtime"),
  				//require("babel-helper-function-name"),
			  	[require("babel-plugin-transform-class-properties"), { "spec": true }],
				require('babel-plugin-transform-es2015-template-literals'),
			    require('babel-plugin-transform-es2015-literals'),
			    require('babel-plugin-transform-es2015-function-name'),
			    require('babel-plugin-transform-es2015-arrow-functions'),
			    require('babel-plugin-transform-es2015-block-scoped-functions'),
			    [require('babel-plugin-transform-es2015-classes')],
			    require('babel-plugin-transform-es2015-object-super'),
			    require('babel-plugin-transform-object-assign'),
			    require('babel-plugin-transform-es2015-shorthand-properties'),
			    require('babel-plugin-transform-es2015-duplicate-keys'),
			    require('babel-plugin-transform-es2015-computed-properties'),
			    require('babel-plugin-transform-es2015-for-of'),
			    require('babel-plugin-transform-es2015-sticky-regex'),
			    require('babel-plugin-transform-es2015-unicode-regex'),
			    require('babel-plugin-check-es2015-constants'),
			    require('babel-plugin-transform-es2015-spread'),
			    require('babel-plugin-transform-es2015-parameters'),
			    require('babel-plugin-transform-es2015-destructuring'),
			    require('babel-plugin-transform-es2015-block-scoping'),
			    require('babel-plugin-transform-es2015-typeof-symbol'),
			    require('babel-plugin-transform-es2015-modules-commonjs'),
			    require('babel-plugin-transform-proto-to-assign'),
			    [require('babel-plugin-transform-regenerator'), {async: false, asyncGenerators: false}],
			  ]
			},
			//include : ["typeof"],
      exclude : ['/node_modules'],
    }],

  },
  plugins: [],
  optimization: {},
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
  },
};