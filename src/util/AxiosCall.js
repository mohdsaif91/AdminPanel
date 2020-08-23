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

async function axiosCall(url, method, data) {
  const authToken = true;
  if (authToken) {
    return await axios({ method, url, data, headers }).then((response) => {
      if (response.status === 401 || response.status === 403) {
        return "Something Went Wrong";
      }
      if (response.ok) {
        return response;
      }
      return response;
    });
  }
}

export default axiosCall;
