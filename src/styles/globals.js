import { createGlobalStyle } from "styled-components";
import { modernNormalize } from "styled-modern-normalize";
import { colors, fonts } from "./variables";

export default createGlobalStyle`
    ${modernNormalize};
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
        font-family: ${colors.font};
        font-weight: 400;
        font-style: normal;
        padding: 0;
		margin: 0;
		-webkit-font-smoothing: antialiased;
    }

    h1,h2,h3,h4,h5,h6 {
		font-family: ${fonts.main};
		font-weight: 100;
		font-style: normal;
		margin: 0;
		padding: 0;
	}

	a {
		margin: 0;
		padding: 0;
		text-decoration: none;
		color: ${colors.blue};
		transition: all 225ms ease-in-out;
		font-family: ${fonts.main};

		&:hover {
			transition: all 225ms ease-in-out;
			text-decoration: none;
		}
	}

	hr {
		width: 100%;
		border: none;
		height: 2px;
		margin: 10px 0 10px 0;
		padding: 0;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	li {
		padding: 0;
		margin: 0;
	}

	input, input::placeholder, textarea, textarea::placeholder, span, label, p, h1, h2, h3, h4, h5, h6 {
		font-family: ${fonts.main};
	}

	textarea::-webkit-input-placeholder, input::-webkit-input-placeholder {
		opacity: .5;
	}

	label, span, p, h3 {
		color: ${colors.themeTextColor3};
	}

	button:disabled {
		opacity: .2;
	}

	textarea {
		resize: none;
	}
`;
