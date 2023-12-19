// @flow
module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					node: "current",
				},
			},
		],
	],
	"plugins": ["@babel/transform-flow-strip-types", "@babel/plugin-proposal-class-properties"]
};
