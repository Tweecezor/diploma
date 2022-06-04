import requests from "@/requests";

export const getAbsoluteImgPath = (imgPath) => {
  console.log(imgPath)
  // console.log(requests);
  if(imgPath == null) {
    console.log('kfkdkfkk')
    return require('../icons/no-avatar.png')
  }
  const baseUrl = requests.defaults.baseURL;
  return `${baseUrl}/${imgPath}`;
  // return `http://localhost:3002/${imgPath}`;
};
