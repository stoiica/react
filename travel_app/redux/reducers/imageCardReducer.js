import { SELECT_IMAGE_CARD } from "../types";

const initialState = {
  oras: "",
  descriere: "",
  url: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SELECT_IMAGE_CARD:
      return {
        oras: payload.oras,
        descriere: payload.descriere,
        url: payload.url
      };
    default:
      return state;
  }
}
