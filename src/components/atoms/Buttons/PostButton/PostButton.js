import styled from 'styled-components';
import send from './send.svg';

const PostButton = styled.button`
	background: #3975F5;
	color: white;
	border: none;
	border-radius:25px;
	width: 50px;
	height: 50px;
	transition: .3s ease;
	background-image: url(${send});
	background-position: center;
	background-size: 20px auto;
	background-repeat: no-repeat;
	cursor: pointer;
	&:hover {
		opacity: 0.7
	}
`

export default PostButton;