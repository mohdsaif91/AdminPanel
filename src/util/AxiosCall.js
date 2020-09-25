import axios from "axios";

const extractJsonPromise = (jsonResponse) => {
  console.log(jsonResponse);
  return jsonResponse.then(
    (json) => {
      return {
        url: jsonResponse.url,
        status: jsonResponse.status,
        statusText: jsonResponse.statusText,
        json,
        ok: jsonResponse.ok,
      };
    },
    (failure) => {
      return {
        url: jsonResponse.url,
        status: jsonResponse.status,
        statusText: jsonResponse.statusText,
        ok: jsonResponse.ok,
        json: { message: "An unknown error occurred" },
      };
    }
  );
};
const headers = {
  "Content-type": "application/json",
};

async function axiosCall(url, method, data, headers, log) {
  console.log("hi mans" + log);
  const authToken = localStorage.getItem("auth-token");
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-type": "application/json",
    },
  });
  if (log) {
    console.log("true hai ");
    return await axios({ method, url, data }).then((response) => {
      if (response.status === 401 || response.status === 403) {
        return "Something Went Wrong";
      }
      if (response.ok) {
        return response;
      }
      return response;
    });
  } else {
    console.log("true nai  hai ");
    if (authToken) {
      return await authAxios({ method, url, data, headers }).then(
        (response) => {
          if (response.status === 401 || response.status === 403) {
            return "Something Went Wrong";
          }
          if (response.ok) {
            return response;
          }
          return response;
        }
      );
    } else {
      console.log("outSide");
    }
  }
}

export default axiosCall;

// const axcessToken = localStorage.getItem("auth-token");
// const authAxios = axios.create({
//   headers: {
//     Authorization: `Bearer ${axcessToken}`,
//   },
// });
