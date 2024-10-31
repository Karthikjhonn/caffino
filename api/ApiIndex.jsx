import { GET } from "./ApiInterface";

export const getProducts = (id) => {
  if (id) {
    return GET(`https://fake-coffee-api.vercel.app/api/${id}`);
  } else {
    return GET(`https://fake-coffee-api.vercel.app/api/`);
  }
};

export const sampleApis = () => {
  return GET("https://api.sampleapis.com/coffee/hot");
};
