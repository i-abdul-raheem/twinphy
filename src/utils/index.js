export const toJson = (formData) => {
  const obj = {};
  formData.forEach(function (value, key) {
    obj[key] = value;
  });
  return obj;
};
