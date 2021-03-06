module.exports = {
	"env": {
		"es6": true,
		"node": true,
		"mocha": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"sourceType": "module",
		"ecmaVersion": 8
	},
	"parser": "babel-eslint",
	"rules": {
		"indent": [
			"error",
			2
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		]
	}
};