import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../types";

const initialState = {
  token: localStorage.getItem("auth_token") || ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_USER:
      localStorage.setItem("auth_token", payload);
      return state;
    case LOGIN_USER:
      localStorage.setItem("auth_token", payload);
      return state;
    case LOGOUT_USER:
      localStorage.removeItem("auth_token");
      return state;
    default:
      return state;
  }
}
