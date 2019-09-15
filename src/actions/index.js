export const saveData = (listings, page, after, before) => ({
  type: 'SAVE_DATA',
  data: {
    listings,
    page,
    after,
    before,
  },
});

export const setPost = (currentPost) => ({
  type: 'SET_POST',
  data: {
    currentPost,
  },
});
