import styled from 'styled-components';

const SearchInput = styled.input`
	border: none;
	border-bottom: 1px solid grey;
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

export default SearchInput;