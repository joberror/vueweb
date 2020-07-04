<template lang="pug">
main
	#error Error
	.error-num(v-if="error.statusCode === 404", data-code='404') 404
		.error-num__clip 404
	.error-num(v-else-if="error.statusCode === 500", data-code='500') 500
		.error-num__clip 500

	p#desc Uh oh, Error seems like the inevitable.
	p but, there's always #[a(href='/', title='Go Home') a solution]

</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang='scss' scoped>
// MISC

:root {
	font-size: 2.4rem;
	line-height: 1.5;
	color: rgba(white, 0.25);
}

main {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	background: #030303;
}

a { color: white; display: inline; }

#error {
	margin-bottom: 1rem;

	font-size: 3.2rem;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 0.075em;
	color: #C94D4D;

	@keyframes pulse {
		from { opacity: 0.5; }
		50% { opacity: 0.5; }
	}
	animation: pulse 4s infinite alternate;

	// "connection"
	position: relative;
	&::before {
		content: '';
		width: 0.75rem;
		height: 50vh;
		margin-bottom: 0.75em;

		position: absolute;
		left: 50%; bottom: 100%;
		transform: translateX(-50%);

		background: linear-gradient(to bottom,
			rgba(white, 0.1) 60%,
			transparent 100%
		);
	}
}

#desc {
	margin: 2em 0 1em;
}


// 500 ERROR NUMBER

.error-num {
	position: relative;
	font-size: 16rem;
	font-family: 'Chewy', cursive;
	letter-spacing: -1.3em;
	margin-left: 0.8em;
	color: white;

	@keyframes colorSplit {
		25% { text-shadow: -0.02em 0 0 #ED008C, 0.025em 0 0 #0087EF; }
		75% { text-shadow: -0.035em 0 0 #ED008C, 0.04em 0 0 #0087EF; }
	}
	animation: colorSplit 1.25s steps(2, end) infinite;
}

.error-num__clip {
	@extend .error-num;
	position: absolute;
	// left: -2px to cover up the horizontal outline
	// that occurs from overlapping
	top: 0; left: -2px;
	z-index: 10;

	color: #333;
	overflow: visible;
	clip-path: polygon(
		0% 0%, 100% 0, 100% 25%, 0 25%,
		0 30%, 100% 30%, 100% 50%, 0 50%,
		0 60%, 100% 60%, 100% 65%, 0 65%,
		0 80%, 100% 80%, 100% 85%, 0 85%,
	0% 0%);

	@keyframes glitch {
		30% { left: 0; }
		to { left: 0; }
	}

	animation: glitch 1s steps(2, start) infinite;

	&::before {
		content: attr(data-code);
		@extend .error-num__clip;
		left: 0.05em;
		color: white;
		z-index: 9;

		// only way to get rid of pesky
		// vertical outline due to overlapping is
		// making polygon 1% taller
		clip-path: polygon(
			0% 0%, 100% 0, 100% 26%, 0 26%,
			0 29%, 100% 29%, 100% 51%, 0 51%,
			0 59%, 100% 59%, 100% 66%, 0 66%,
			0 79%, 100% 79%, 100% 86%, 0 86%,
		0% 0%);
	}
}

.error-num__clip-left {
	@extend .error-num__clip;
}

p {
	font-size: 2.4rem;
	font-weight: bold;
}
</style>