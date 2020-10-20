import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { firestore } from '../../firebase'
import add from '../../actions'

import Header from '../organisms/Header/Header';
import Post from '../organisms/Post/Post';
import Sidebar from '../organisms/Sidebar/Sidebar'


const BoardContainer = styled.div`
	width: 50%;
	padding: 0 30px;
`

function MainBoard({posts, add}) {

	useEffect(() => {
		const fetchPosts = async () => {
			await firestore.collection('posts').get().then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					add(doc.data());
				});
			});
		}	
		fetchPosts()
	}, [add])
	
  return (
    <>
		<Header />
		<Sidebar />
		<BoardContainer >
			{Object.entries(posts).map(([key, value]) => {
				return <Post key={key} content={value.content} title={value.title} timestamp={value.timestamp}/>
			})}
		</BoardContainer>
    </>
	
  );
}


const mapStateToProps = state => ({
	posts: state.posts
})

const mapDispatchToProps = dispatch => ({
	add: (items) => dispatch(add(items))
  });

export default connect(mapStateToProps, mapDispatchToProps)(MainBoard);
