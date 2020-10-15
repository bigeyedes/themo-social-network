import React from 'react';
import styled from 'styled-components';
import UserAvatar from './../../atoms/UserAvatar/UserAvatar';
import Heading from './../../atoms/Heading/Heading';
import TimeStamp from '../../atoms/TimeStamp/TimeStamp';

const PostHeaderContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
`

const PostHeader = () => {
	return(
		<div>
			<PostHeaderContainer>
				<UserAvatar></UserAvatar>
				<div>
					<Heading>Title</Heading>
					<TimeStamp>22.09.2020 | 14:48</TimeStamp>
				</div>
				
			</PostHeaderContainer>

		</div>
		
	)
}

export default PostHeader;