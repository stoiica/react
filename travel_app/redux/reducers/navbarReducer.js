import { CHANGE_NAVBAR } from "../types";

const initialState = {
  isAuthenticated: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_NAVBAR:
      return {
        isAuthenticated: payload
      };
    default:
      return state;
  }
}
