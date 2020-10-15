import styled from 'styled-components';

const Textarea = styled.textarea`
	border: 1px solid grey;
	border-radius: 30px;
	padding: 5px 0 5px 15px;
	color: grey;
	font-size: 1rem;
	font-weight: 400;
	position: relative;
	display: inline-block;
	&:focus, &:active{
		border: none;
		outline: none;
		box-shadow: none;
	}
`

export default Textarea;