import { REC_API } from "../action/shop";

export default (state = {}, { type, data }) => {
  console.log(type);
  switch (type) {
    case REC_API:
      return data;
    default:
      return state;
  }
};
