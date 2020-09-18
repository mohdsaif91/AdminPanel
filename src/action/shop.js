export const REQ_API = "REQ_API";
export const REC_API = "REC_API";

export const requestApi = () => {
  return { type: REQ_API };
};

export const reciveApi = (data) => {
  return { type: REC_API, data };
};
