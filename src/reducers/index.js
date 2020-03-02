import { v4 as uuidv4 } from "uuid";

export const ADD_FRIEND = "ADD_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

export const addFriend = friend => ({
  type: ADD_FRIEND,
  payload: friend
});

export const removeFriend = id => ({
  type: REMOVE_FRIEND,
  payload: id
});

//reducer
const initialState = [
  {
    id: uuidv4(),
    name: "Elizabeth",
    surname: "Olsen",
    phoneNumber: "00996755973535",
    timezone: "Australia/Brisbane",
    startTime: 0,
    endTime: 3600,
    available: false
  },
  {
    id: uuidv4(),
    name: "Elizabeth",
    surname: "Pat",
    phoneNumber: "00996755973535",
    timezone: "Australia/Brisbane",
    startTime: 3600,
    endTime: 36000,
    available: true
  },

];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return [...state, { ...action.payload, id: uuidv4() }];
    case REMOVE_FRIEND:
      return state.filter(friend => friend.id !== action.payload);
    default:
      return state;
  }
};
