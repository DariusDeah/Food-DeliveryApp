"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequestBody = void 0;
const validateRequestBody = (reqFields, validFields) => {
    // let validRequestBody = {};
    // for (let i = 0; i < validFields.length; i++) {
    //     validRequestBody[validFields[i]] = reqFields[validFields[i]];
    // }
    // return validRequestBody;
    return reqFields === validFields;
};
exports.validateRequestBody = validateRequestBody;
