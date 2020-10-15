import React from 'react';
import styled from 'styled-components';
import PostHeader from '../../molecules/PostHeader/PostHeader';


const PostContainer = styled.div`
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	max-width: 50%;
`
const PostContent = styled.div`
	padding: 30px 10px;
	font-size: 0.9em;
	color: #696969;
	font-family: 'Sora', sans-serif;
`

const Post = () => {
	return(
		<PostContainer>
			<PostHeader></PostHeader>
			<PostContent>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ligula rhoncus, feugiat lacus vitae, pharetra leo. Nulla mollis suscipit lacus, quis commodo lacus aliquam nec. Fusce ligula felis, pulvinar sit amet pulvinar at, finibus non arcu. Vivamus nisi nibh, rhoncus ac congue sit amet, lobortis semper ante. Nam ornare nunc nec felis tempor elementum. 
			</PostContent>
		</PostContainer>
	)
}

export default Post;