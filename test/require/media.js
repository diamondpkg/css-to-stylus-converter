module.exports = (test) => {
	describe('media', function () {
		test([
			[
				[
					`@media (max-width:400px) {`,
					`	#login_form .common-input.icon + .error-message {`,
					`		font-size: 12px;`,
					`		padding: 20px;`,
					`	}`,
					`	/*#login_form {`,
					`		margin: auto;`,
					`	}*/`,
					`}`
				].join('\n'),
				[
					`@media (max-width:400px)`,
					`	#login_form`,
					`		.common-input`,
					`			&.icon`,
					`				+.error-message`,
					`					font-size 12px`,
					`					padding 20px`,
					`	/*#login_form {`,
					`		margin: auto;`,
					`	}*/`
				].join('\n')
			],
			[
				[
					`@media (max-width:400px) {`,
					`	#login_form .error-message {`,
					`		font-size: 12px;`,
					`		padding: 20px;`,
					`	}`,
					`}`,
					`@media only screen and (max-width:400px) {`,
					`	#login_form {`,
					`		font-size: 12px;`,
					`	}`,
					`}`,
					`@media only screen and (max-width:400px) {`,
					`	.class-1 {`,
					`		padding: 20px;`,
					`	}`,
					`}`
				].join('\n'),
				[
					`@media (max-width:400px)`,
					`	#login_form`,
					`		.error-message`,
					`			font-size 12px`,
					`			padding 20px`,
					`@media only screen and (max-width:400px)`,
					`	#login_form`,
					`		font-size 12px`,
					`	.class-1`,
					`		padding 20px`
				].join('\n')
			]
		]);
	});
}