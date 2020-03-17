import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import navbarReducer from "./reducers/navbarReducer";
import imageCardReducer from "./reducers/imageCardReducer";
import personalDataReducer from "./reducers/personalDataReducer";

export const rootReducer = combineReducers({
  authReducer,
  navbarReducer,
  imageCardReducer,
  personalDataReducer
});

export default rootReducer;
