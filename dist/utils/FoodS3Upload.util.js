"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadToS3 = void 0;
const unlinkLocal_1 = require("../helpers/unlinkLocal");
const multer_config_1 = require("../middlewares/multer.config");
//implement strategy pattern for photo uploads
const Food_S3_Upload = (req, food) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, multer_config_1.uploadFile)(req.file, food, process.env.S3_Name);
    yield (0, unlinkLocal_1.deleteLocalMulterImages)(req.file.path);
});
const uploadStrategies = {
    food: Food_S3_Upload,
};
const UploadToS3 = (itemType, req, item) => {
    return uploadStrategies[itemType](req, item);
};
exports.UploadToS3 = UploadToS3;
