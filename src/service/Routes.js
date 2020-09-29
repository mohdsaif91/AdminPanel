const baseUrlV1 = "https://flashitapi.herokuapp.com/v1";

const loginurl = `${baseUrlV1}/login`;
const resturant = `${baseUrlV1}/Resturant`;

const routes = {
  login: {
    adminLogin: `${baseUrlV1}/auth`,
    shopLogin: `${baseUrlV1}/auth`,
    tokenIsValid: `${loginurl}/tokenIsValid`,
    getUser: `${baseUrlV1}login`,
  },
  resturant: {
    addResturant: `${baseUrlV1}/shops`,
    getResturant: `${baseUrlV1}/shops`,
    editResturant: `${baseUrlV1}/shops`,
  },
};
export default routes;
