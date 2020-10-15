import styled, { css } from 'styled-components';
import like from './like-outline.svg';
import likeFilled from './like-active.svg';

const Like = styled.button`
	background: none;
	width: 25px;
	height: 25px;
	cursor: pointer;
	background-image: url(${like});
	background-repeat: no-repeat;
	background-size: 20px auto;
	background-position: center;
	border: none;
	&:hover {
		opacity: 0.7
	}

	${({ liked }) =>
    liked &&
    css`
      background-image: url(${likeFilled});
    `}
`

export default Like;