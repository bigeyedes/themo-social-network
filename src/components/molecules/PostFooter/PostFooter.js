import React, { useState } from 'react';
import styled from 'styled-components';
import { firestore } from '../../../firebase'
import LikeButton from '../../atoms/Buttons/LikeButton/LikeButton'

const LikeBtnContainer = styled.div`
	display: flex;
	align-items: center;
	span {
		color: grey;
		font-family: 'Sora',sans-serif;
	}
`

const PostFooter = ({likes, user}) => {
	const[displayLikes, setDisplayLikes] = useState(likes)

	const updatePostLikesByOne = (postID) => {
		let washingtonRef = firestore.collection('posts').doc(postID);
		return washingtonRef.update({
			likes: likes + 1
		})
	}

	const handleIncreseLikes = (e) => {
		const postID = e.target.parentNode.parentNode.getAttribute('data-id')

		updatePostLikesByOne(postID)
		firestore.collection("posts").doc(postID)
			.onSnapshot(function(doc) {
				setDisplayLikes(doc.data().likes);
			});
	}

	return(
		<LikeBtnContainer>
			{user
				? <LikeButton onClick={handleIncreseLikes}></LikeButton>
				: ''
			}
			<span>{displayLikes}</span>
		</LikeBtnContainer>
		
	)
}

export default PostFooter;