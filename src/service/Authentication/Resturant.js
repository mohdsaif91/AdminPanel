import routes from "../Routes";
import axiosCall from "../../util/AxiosCall";

function addResturant(addRest) {
  const url = `${routes.resturant.addResturant}`;
  console.log(url);
  const method = "POST";
  const body = addRest;
  return axiosCall(url, method, body);
}

function getResturant() {
  const url = `${routes.resturant.getResturant}`;
  const method = "GET";
  return axiosCall(url, method, null);
}
function editResturant(editRest) {
  const url = `${routes.resturant.editResturant}`;
  const method = "PUT";
  const body = editRest;
  return axiosCall(url, method, body);
}
function updateResturantStatus(restId) {
  const url = `${routes.resturant.editResturant}/${restId}/status`;
  const method = "GET";
  return axiosCall(url, method, null);
}

export const Resturant = {
  addResturant,
  getResturant,
  editResturant,
  updateResturantStatus,
};
