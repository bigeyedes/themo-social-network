import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { firestore } from '../../../firebase'
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
	position: relative;
	.delete-post {
		position: absolute;
		top: 0;
		right: 20px;
		font-size: 2em;
		font-weight: 700;
		color: #b3b3b3;
		font-family: 'Sora', sans-serif;
		cursor: pointer;
		transition: .3s ease;
		&:hover {
			color: #3975F5;
		}
		button { 
			border: none;
			background: white;
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
			padding: 10px;
			cursor: pointer;
			position: absolute;
			top: 40px;
			left: -12px;
			transition: .3s ease;
			&:hover {
				background: #3975F5;
				color: white;
			}
		}
		.visibility-true{
			display: block;
		}
		.visibility-false{
			display: none;
		}
	}
`
const PostContent = styled.div`
	padding: 30px 0;
	font-size: 0.9em;
	color: #696969;
	font-family: 'Sora', sans-serif;
`

const Post = ({content, title, timestamp, id, likes, user}) => {

	const[isVisible, setVisibility] = useState(false)

	const deletePost = (postID) => {
		firestore.collection('posts').doc(postID).delete().then(function() {
			alert("Document successfully deleted!");
		}).catch(function(error) {
			alert("Error removing document: ", error.message);
		});
	}

	const toggleVisibility = () => {
		setVisibility(!isVisible)
	}

	const handlePostDelete = (e) => {
		const postID = e.target.parentNode.parentNode.getAttribute('data-id');
		deletePost(postID)
	}

	return(
		<PostContainer data-id={id}>
			{user 
				? <div className="delete-post" onClick={toggleVisibility}>
					...
					<button className={`visibility-${isVisible.toString()}`} onClick={handlePostDelete}>Delete</button>
					</div> 
				: ''
			}
			<PostHeader title={title} timestamp={timestamp}/>
			<PostContent>
				{content}
			</PostContent>
			<PostFooter likes={likes} user={user}></PostFooter>
		</PostContainer>
	)
}

const mapStateToProps = state => ({
	user: state.user
})

export default connect(mapStateToProps, null)(Post);