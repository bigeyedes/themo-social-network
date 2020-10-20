import styled from 'styled-components';

const SearchInput = styled.input`
	border: none;
	border-radius: 20px;
	padding: 10px 0 10px 25px;
	background: #FAFCFF;
	color: #c9c9c9;
	font-size: 1.5rem;
	font-weight: 400;
	position: relative;
	display: inline-block;

	&:focus, &:active{
		border: none;
		outline: none;
		box-shadow: none;
	}
`

export default SearchInput;