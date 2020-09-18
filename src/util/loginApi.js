import axios from "axios";

async function loginAxios(url, method, data) {
  axios
    .post(url, data, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.status === 401 || response.status === 403) {
        return "Something Went Wrong";
      }
      if (response.ok) {
        return response;
      }
      return response;
    });
}

export default loginAxios;
