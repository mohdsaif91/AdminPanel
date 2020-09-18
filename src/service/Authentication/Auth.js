import routes from "../Routes";
import axiosCall from "../../util/AxiosCall";
import loginAxios from "../../util/loginApi";

function loginAdmin(signinData) {
  const url = `${routes.login.adminLogin}`;
  const method = "POST";
  const body = signinData;
  // console.log(loginAxios(url, method, body));
  return axiosCall(url, method, body);
}

function loginShop(signinData) {
  const url = `${routes.login.shopLogin}`;
  const method = "POST";
  const body = signinData;
  return axiosCall(url, method, body);
}

function tokenIsValied(token) {
  const url = routes.login.tokenIsValid;
  const method = "POST";
  const headers = token;
  return axiosCall(url, method, null, headers);
}

function getUser(token) {
  const url = routes.login.getUser;
  const method = "GET";
  const headers = token;
  return axiosCall(url, method, null, headers);
}

export const Auth = {
  loginAdmin,
  loginShop,
  tokenIsValied,
  getUser,
};
