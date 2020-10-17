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
	margin-bottom: 30px;

`

const Logo = styled.div`
	font-size: 2em;
	color: #3975F5;
	font-weight: 800;
	width: 25%;
`

function Header(props) {

  return (
    <HeaderContainer>
		<Logo>T</Logo>
		<div>
			<SearchInput placeholder="Search"/>
		</div>
		<div>
			<UserAvatar/>
		</div>
    </HeaderContainer>
	
  );
}

export default Header;
