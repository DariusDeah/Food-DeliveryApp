"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UberEats_Clone_Folder = void 0;
const aws_sdk_1 = require("aws-sdk");
exports.UberEats_Clone_Folder = new aws_sdk_1.S3({
    accessKeyId: process.env.s3_ID,
    secretAccessKey: process.env.S3_ACCESS_KEY,
    region: process.env.S3_Region
});
