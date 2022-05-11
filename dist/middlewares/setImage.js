"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setImage = void 0;
const Validation_1 = require("../helpers/Validation");
const setImage = (req, res, next) => {
    if (req.file) {
        Validation_1.Validation.fileSizeValidation(req.file.size, "10mb", "Image file size is too large");
        req.body.image = req.file.path;
    }
    next();
};
exports.setImage = setImage;
