import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { firestore } from '../../../firebase/index'
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
	}
`
const PostContent = styled.div`
	padding: 30px 0;
	font-size: 0.9em;
	color: #696969;
	font-family: 'Sora', sans-serif;
`

const Post = ({content, title, timestamp, id, likes, user}) => {
	console.log(user)

	const handlePostDelete = (e) => {
		const postID = e.target.parentNode.getAttribute('data-id');

		firestore.collection("posts").doc(postID).delete().then(function() {
			alert("Document successfully deleted!");
		}).catch(function(error) {
			alert("Error removing document: ", error);
		});
	}

	return(
		<PostContainer data-id={id}>
			{user ? <div className="delete-post" onClick={handlePostDelete}>...</div> : ''}
			<PostHeader title={title} timestamp={timestamp}/>
			<PostContent>
				{content}
			</PostContent>
			<PostFooter likes={likes}></PostFooter>
		</PostContainer>
	)
}

const mapStateToProps = state => ({
	user: state.user
})

export default connect(mapStateToProps, null)(Post);