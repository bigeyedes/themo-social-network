import styled from 'styled-components';

const Textarea = styled.textarea`
	background: #FAFCFF;
	border: none;
	border-radius: 10px;
	padding: 20px;
	color: grey;
	font-size: 1.5rem;
	font-weight: 400;
	display: inline-block;
	width: 100%;
	height: 100px;
	margin: 20px 0;
	&:focus, &:active{
		border: none;
		outline: none;
		box-shadow: none;
	}
`

export default Textarea;