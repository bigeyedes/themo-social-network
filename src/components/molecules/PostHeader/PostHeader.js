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

const PostHeader = ({title, timestamp}) => {

	const timestampToISODate = timestamp.toDate().toDateString()
	const timestampToISOHours = timestamp.toDate().toLocaleTimeString()

	return(
		<div>
			<PostHeaderContainer>
				<UserAvatar></UserAvatar>
				<div>
					<Heading>{title}</Heading>
				<TimeStamp>{timestampToISODate} | {timestampToISOHours}</TimeStamp>
				</div>
				
			</PostHeaderContainer>

		</div>
		
	)
}

export default PostHeader;