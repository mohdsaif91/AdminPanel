const baseUrlV1 = "https://flashitapi.herokuapp.com/v1";

const loginurl = `${baseUrlV1}/login`;
const resturant = `${baseUrlV1}/Resturant`;

const routes = {
  login: {
    adminLogin: `${baseUrlV1}/auth`,
    shopLogin: `${loginurl}/shop-auth`,
    tokenIsValid: `${loginurl}/tokenIsValid`,
    getUser: `${baseUrlV1}login`,
  },
  resturant: {
    addResturant: `${resturant}/addResturant`,
  },
};
export default routes;
