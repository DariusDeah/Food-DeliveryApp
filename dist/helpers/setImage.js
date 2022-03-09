"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setImage = void 0;
const Validation_1 = require("./Validation");
const setImage = (reqBody, imageFile) => {
    imageFile.size && Validation_1.Validation.fileSizeValidation(imageFile.size, '1kb', 'Image file size is too large');
    reqBody.image = imageFile.path || reqBody.image;
    return reqBody;
};
exports.setImage = setImage;
