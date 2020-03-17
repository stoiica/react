import { CHANGE_NAVBAR } from "../types";

export const changeNavbar = payload => {
  return {
    type: CHANGE_NAVBAR,
    payload: payload
  };
};

export default changeNavbar;
