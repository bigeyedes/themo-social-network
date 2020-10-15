import styled, { css } from 'styled-components'

const Button = styled.button`
	background: #3975F5;
	color: white;
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	margin: 10px;
	transition: .3s ease;
	cursor: pointer;
	&:hover {
		opacity: 0.7
	}

	${({ secondary }) =>
    secondary &&
    css`
      background: black;
    `}
`

export default Button