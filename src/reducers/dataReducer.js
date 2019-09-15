const initialState = {
  page: 0,
  after: null,
  before: null,
  listings: [],
};

const dataReducer = (state = initialState, action) => {
  // If reddit listing data is corrupted, don't update anything
  if (typeof action.data === 'undefined' || typeof action.data.listings === 'undefined') {
    return state;
  }

  switch (action.type) {
    case 'SAVE_DATA':
      return {
        listings: action.data.listings,
        page: action.data.page,
        after: action.data.after,
        before: action.data.before,
      };
    default:
      return state;
  }
};

export default dataReducer;
