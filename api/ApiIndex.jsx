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
export const getMyProduct = () => {
  return GET("https://backend-g7t0.onrender.com/api/k1/products");
};
