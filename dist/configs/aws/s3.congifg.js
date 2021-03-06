"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UberEats_Clone_Folder = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
exports.UberEats_Clone_Folder = new aws_sdk_1.default.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS,
    region: process.env.AWS_REGION
});
