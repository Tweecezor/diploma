import requests from "@/requests";

export const getAbsoluteImgPath = (imgPath) => {
  // console.log(requests);
  const baseUrl = requests.defaults.baseURL;
  return `${baseUrl}/${imgPath}`;
  // return `http://localhost:3002/${imgPath}`;
};
