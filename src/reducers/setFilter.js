export const SET_FILTER = "SET_FILTER";

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
});

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
