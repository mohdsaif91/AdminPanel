import { LOGIN } from "../action/Login";

export default function login(state = {}, action) {
  switch (action.type) {
    case LOGIN.LOGIN_SUCESS:
      return {
        ...state,
        isUserAuthenticated: true,
        loginFailure: false,
      };
    case LOGIN.LOGOUT_USER:
      return {
        ...state,
        isUserAuthenticated: false,
        loginFailure: false,
      };
    case LOGIN.LOGIN_FAILURE:
      return {
        ...state,
        isUserAuthenticated: false,
        loginFailure: true,
      };
    default:
      return state;
  }
}
