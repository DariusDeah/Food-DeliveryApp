"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setImage = void 0;
const Errors_1 = require("../utils/Errors");
const setImage = (reqBody, imageFile) => {
    const fileLimit = 1000000;
    if ((imageFile === null || imageFile === void 0 ? void 0 : imageFile.size) > fileLimit)
        throw new Errors_1.BadRequestException('Image file size is too large' + imageFile.size);
    reqBody.image = imageFile.path || reqBody.image;
    return reqBody;
};
exports.setImage = setImage;
