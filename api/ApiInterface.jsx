import axios from "axios";

export const GET = (url) => {
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
