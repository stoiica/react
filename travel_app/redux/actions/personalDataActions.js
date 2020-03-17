import { SELECT_USER } from "../types";

export const selectUser = payload => {
  return {
    type: SELECT_USER,
    payload: payload
  };
};

export default selectUser;
