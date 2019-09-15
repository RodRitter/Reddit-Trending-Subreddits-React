const initialState = {
  currentPost: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POST':
      return {
        currentPost: action.data.currentPost,
      };
    default:
      return state;
  }
};

export default postReducer;
