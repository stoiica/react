import { SELECT_IMAGE_CARD } from "../types";

export const selectImageCard = payload => {
  return {
    type: SELECT_IMAGE_CARD,
    payload: payload
  };
};

export default selectImageCard;
