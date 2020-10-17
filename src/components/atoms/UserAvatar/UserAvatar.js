import React from 'react'

import styled, { css } from 'styled-components'
import avatar from './avatar.jpg'

const UserInfoContainer = styled.a`
	display: block;
	font-size: 0.8em;
	color: grey;
	display: flex;
	align-items: center;
	font-family: 'Sora', sans-serif;
	font-weight: 600;
`
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

const UserInfo = () => {
	return(
		<UserInfoContainer>
			<UserAvatar />
		</UserInfoContainer>
		
	)
}

export default UserInfo;