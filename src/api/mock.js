
import axios from "axios";

export const getUserInfo = (id) => {
  return axios.request({
    url: "/getUser/"+id,
    method: "get"
  });
};
