import { LOGIN, LOGOUT } from "./Action";

// Initial state of the authentication
const initialState = {
  user: null,
  isAuthenticated: false,
};

// Reducer function to handle authentication actions
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
