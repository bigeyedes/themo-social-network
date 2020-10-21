import React, { useRef } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app'
import { firestore } from '../../../firebase/index'
import Input from '../../atoms/Input/Input'
import TextArea from '../../atoms/Textarea/Textarea';
import Button from '../../atoms/Buttons/Button/Button'

const PostCreatorContainer = styled.div`
	background: white;
	border-radius: 10px;
	padding: 20px;
	margin: 30px 0;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.02);
	input {
		border-radius: 10px;
	}
	button {
		margin: 0;
	}
`

const PostCreator = () => {

	const postTitle = useRef()
	const postContent = useRef()

	const handlePostCreating = async () => {
		const docData = {
			title: postTitle.current.value,
			content: postContent.current.value,
			timestamp: firebase.firestore.Timestamp.now().toDate()
		};
		firestore.collection("posts").add(docData).then(function() {
			alert("Post is successfully added!");
		})
	}

	return(
		<PostCreatorContainer>
			<Input ref={postTitle} placeholder="Set title..."/>
			<TextArea ref={postContent} placeholder="What's on your mind?"/>
			<Button onClick={handlePostCreating}>Post</Button>
		</PostCreatorContainer>
	)
}

export default PostCreator