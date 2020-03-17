import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../types";

export const register = payload => {
  return {
    type: REGISTER_USER,
    payload: payload
  };
};

export const login = payload => {
  return {
    type: LOGIN_USER,
    payload: payload
  };
};

export const logout = payload => {
  return {
    type: LOGOUT_USER,
    payload: payload
  };
};

export default register;
