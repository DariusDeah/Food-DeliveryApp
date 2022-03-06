
export const validateRequestBody = (reqFields: {}, validFields: string[]) => {
  let validRequestBody = {};
  for (let i = 0; i < validFields.length; i++) {
      validRequestBody[validFields[i]] = reqFields[validFields[i]];
  }
  return validRequestBody;
}