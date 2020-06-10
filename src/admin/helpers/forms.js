export const wrapIntoFormData = (plainObject) => {
  // const formData = new FormData();
  // console.log(plainObject);
  // formData.append("key", "2214");
  // console.log(formData);

  let formData = new FormData();

  Object.keys(plainObject).forEach((key) => {
    console.log(plainObject[key]);
    formData.append(key, plainObject[key]);
    console.log(formData);
  });
  // for (let [name, value] of formData) {
  //   alert(`${name} = ${value}`); // key1=value1, потом key2=value2
  // }

  return formData;
};
