const intialState = {
	posts: ''
}

const rootReducer = (state = intialState, action) => {
	switch (action.type) {
		case 'ADD_POSTS':
		  return {
			...state, posts: [...state.posts, action.items]
		  }
		default:
		  return state
		}
}

export default rootReducer

