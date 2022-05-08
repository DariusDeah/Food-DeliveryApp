"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food_S3_Upload = void 0;
const setImage_1 = require("../helpers/setImage");
const Food_S3_Upload = () => {
    (0, setImage_1.setImage)(req.body, req.file);
};
exports.Food_S3_Upload = Food_S3_Upload;
