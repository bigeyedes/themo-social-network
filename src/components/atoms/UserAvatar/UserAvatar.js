import styled, { css } from 'styled-components'
import avatar from './avatar.jpg'

const UserAvatar = styled.div`
	background-image: url(${avatar});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 50px;
	height: 50px;
	border-radius: 25px;
	margin-right: 20px;
	cursor: pointer;

	${({ empty }) =>
    empty &&
    css`
	  background-image: none;
	  background: #3975F5;
    `}
`

export default UserAvatar;