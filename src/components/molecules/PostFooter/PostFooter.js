import React from 'react';
import styled from 'styled-components';
import LikeButton from '../../atoms/Buttons/LikeButton/LikeButton'

const LikeBtnContainer = styled.div`
	display: flex;
	align-items: center;
	span {
		color: grey;
		font-family: 'Sora',sans-serif;
	}
`

const PostFooter = ({likes}) => {
	return(
		<LikeBtnContainer>
			<LikeButton></LikeButton><span>{likes}</span>
		</LikeBtnContainer>
		
	)
}

export default PostFooter;