import React from 'react';
import styled from 'styled-components';
import SearchInput from '../../atoms/SearchInput/SearchInput'
import UserAvatar from '../../atoms/UserAvatar/UserAvatar'

const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: 'Sora', sans-serif;
	background: white;
`

const Logo = styled.div`
	font-size: 2em;
	color: #3975F5;
	font-weight: 800;
	width: 15%;
	padding: 20px;
	border-right: 1px solid #dbdbdb;
`

const AvatarWrapper = styled.div`
	width: 15%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
`

function Header(props) {

  return (
    <HeaderContainer>
		<Logo>THEMO</Logo>
		<div>
			<SearchInput placeholder="Search"/>
		</div>
		<AvatarWrapper>
			<UserAvatar/>
		</AvatarWrapper>
    </HeaderContainer>
	
  );
}

export default Header;
