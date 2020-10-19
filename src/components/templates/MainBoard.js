import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { firestore } from '../../firebase'
import Post from '../organisms/Post/Post';
import Header from '../organisms/Header/Header';
import add from '../../actions'


const BoardContainer = styled.div`
	max-width: 680px;
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
		<BoardContainer >
			{Object.entries(posts).map(([key, value]) => {
				return <Post key={key} content={value.content}/>
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
