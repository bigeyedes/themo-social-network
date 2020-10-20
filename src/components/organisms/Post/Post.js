import React from 'react';
import styled from 'styled-components';
import PostHeader from '../../molecules/PostHeader/PostHeader';
import PostFooter from '../../molecules/PostFooter/PostFooter';


const PostContainer = styled.div`
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);
	max-width: 100%;
	margin: 30px 0;
	background: white;
	margin-left: auto;
	margin-right: auto;
`
const PostContent = styled.div`
	padding: 30px 0;
	font-size: 0.9em;
	color: #696969;
	font-family: 'Sora', sans-serif;
`

const Post = ({content}) => {
	return(
		<PostContainer>
			<PostHeader></PostHeader>
			<PostContent>
				{content}
			</PostContent>
			<PostFooter></PostFooter>
		</PostContainer>
	)
}

export default Post;