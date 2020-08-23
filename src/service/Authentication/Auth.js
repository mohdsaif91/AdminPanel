import routes from "../Routes";
import axiosCall from "../../util/AxiosCall";

function loginAdmin(signinData) {
  const url = `${routes.adminLogin}`;
  //   console.log(signinData + " <-> " + url);
  const method = "POST";
  const body = signinData;
  return axiosCall(url, method, body);
}

export const Auth = {
  loginAdmin,
};
