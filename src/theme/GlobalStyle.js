import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;700&display=swap');

	*, *::before, *::after {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	html {
		font-size:62.5%
	}

	body {
		font-size: 1.6rem;
		font-family: 'Sora', sans-serif;
		color: black;
		background: #FAFCFF;
		margin: 0;
	}
	input, textarea, h1, h2, h3, h4, h5, h6, span, p {
		font-family: 'Sora', sans-serif;
	}
`

export default GlobalStyle;