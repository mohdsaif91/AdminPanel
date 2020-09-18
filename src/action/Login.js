export const LOGIN = {
  LOGIN_SUCESS: "LOGIN_SUCESS",
  LOGOUT_USER: "LOGOUT_USER",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGIN_PROCESS: "LOGIN_PROCESS",
};

export function loginSucess() {
  return {
    type: LOGIN.LOGIN_SUCESS,
  };
}
export function logoutUser() {
  return {
    type: LOGIN.LOGOUT_USER,
  };
}
export function loginFaiure() {
  return {
    type: LOGIN.LOGIN_FAILURE,
  };
}
export function loginProcess() {
  return {
    type: LOGIN.LOGIN_PROCESS,
  };
}
