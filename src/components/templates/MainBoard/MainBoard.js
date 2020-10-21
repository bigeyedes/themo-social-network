import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { firestore } from '../../../firebase'
import { add } from '../../../actions'

import PostCreator from '../../organisms/PostCreator/PostCreator';
import Post from '../../organisms/Post/Post';
import Sidebar from '../../organisms/Sidebar/Sidebar'


const BoardContainer = styled.div`
	width: 50%;
	padding: 0 30px;
	/* margin-left: auto;
	margin-right: auto; */
`

function MainBoard({posts, user, add}) {

	useEffect(() => {
		const fetchPosts = async () => {
			await firestore.collection('posts').orderBy('timestamp', 'desc').get().then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					add(doc.data());
				});
			});
		}
		fetchPosts()
	}, [])
	
  return (
    <>
		<Sidebar />
		<BoardContainer >
		{user
			? <PostCreator/>
			: <><h2>Please login and start posting!</h2></>
		}
			{Object.entries(posts).map(([key, value]) => {
				return <Post key={key} content={value.content} title={value.title} timestamp={value.timestamp} id={value.id} likes={value.likes}/>
			})}
		</BoardContainer>
    </>
	
  );
}


const mapStateToProps = state => ({
	posts: state.posts,
	user: state.user
})

const mapDispatchToProps = dispatch => ({
	add: (items) => dispatch(add(items))
  });

export default connect(mapStateToProps, mapDispatchToProps)(MainBoard);
