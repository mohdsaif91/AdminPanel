import routes from "../Routes";
import axiosCall from "../../util/AxiosCall";

function addResturant(addRest) {
  const url = `${routes.resturant.addResturant}`;
  console.log(url);
  // he
  const method = "POST";
  const body = addRest;
  return axiosCall(url, method, body);
}

export const Resturant = {
  addResturant,
};
