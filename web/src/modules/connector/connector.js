import axios from "axios";

const baseUrl = "http://localhost:3001";

export default {
  get(route, isAuthenticated = true) {
    return axios.get(baseUrl + route, {
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    });
  },
  post(route, body = {}, isAuthenticated = true) {
    return axios.post(baseUrl + route, body, {
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    });
  },
};
