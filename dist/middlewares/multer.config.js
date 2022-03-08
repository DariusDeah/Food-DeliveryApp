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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const Errors_1 = require("../utils/Errors");
const node_fs_1 = __importDefault(require("node:fs"));
const s3_congifg_1 = require("../aws/s3.congifg");
const multerFilter = (req, file, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log({ file });
    if (!file.mimetype.startsWith('image'))
        next(new Errors_1.BadRequestException('invalid file type: ' + file.mimetype));
    next(null, true);
});
exports.upload = (0, multer_1.default)({ dest: 'uploads', fileFilter: multerFilter });
const uploadFile = (file, food) => {
    const fileStream = node_fs_1.default.createReadStream(file.path);
    const extension = file.mimetype.split('/')[1];
    const Key = `${food.size}-${food.name}-${Date.now()}.${extension}`;
    const uploadParams = {
        Bucket: process.env.S3_Name,
        Body: fileStream,
        Key
    };
    return s3_congifg_1.UberEats_Clone_Folder.upload(uploadParams).promise();
};
exports.uploadFile = uploadFile;
