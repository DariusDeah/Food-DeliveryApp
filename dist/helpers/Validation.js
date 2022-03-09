"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const Errors_1 = require("../utils/Errors");
class Validation {
    static requiredString(field, errorMessage) {
        if (!field || !field.length)
            throw new Errors_1.BadRequestException(errorMessage);
    }
    static requiredInt(field, errorMessage) {
        if (!field || field <= 0)
            throw new Errors_1.BadRequestException(errorMessage);
    }
    static matchesValue(field, value, errorMessage) {
        if (field !== value)
            throw new Errors_1.BadRequestException(errorMessage);
    }
    static matchesValues(field, values, errorMessage) {
        if (!values.includes(field))
            throw new Errors_1.BadRequestException(errorMessage);
    }
    static isEmail(field, errorMessage) {
        const emailFormat = /\@[a-z]*\b\.\b[a-z]*\b/;
        if (!field.length || !field.match(emailFormat))
            throw new Errors_1.BadRequestException(errorMessage);
    }
    static validateLength(field, requiredLength, errorMessage) {
        if (field.length < requiredLength)
            throw new Errors_1.BadRequestException(errorMessage);
    }
    static fileSizeValidation(fileSize, limit, errorMessage) {
        var _a, _b;
        //would be neat if caller could specify file size in format: '10mb' , '100mb'
        console.log('hit file size validation');
        let validFileFormats;
        (function (validFileFormats) {
            validFileFormats["kb"] = "kb";
            validFileFormats["mb"] = "mb";
            validFileFormats["gb"] = "gb";
        })(validFileFormats || (validFileFormats = {}));
        //make sure the callers given format is valid
        const conversionsFromKiloBytes = {
            kb: 1024,
            mb: Math.pow(1024, 2),
            gb: Math.pow(1024, 3)
        };
        //by default the file size limit is the size of the provided file 
        let fileSizeLimit = fileSize;
        const sizeFormat = (_a = limit.match(/[a-z]/g)) === null || _a === void 0 ? void 0 : _a.join("");
        const sizeValue = (_b = limit.match(/[0-9]/g)) === null || _b === void 0 ? void 0 : _b.join();
        if ((sizeFormat === null || sizeFormat === void 0 ? void 0 : sizeFormat.length) && (sizeValue === null || sizeValue === void 0 ? void 0 : sizeValue.length)) {
            fileSizeLimit = parseInt(sizeValue, 10) * conversionsFromKiloBytes[sizeFormat];
        }
        console.log({ fileSizeLimit });
        if (sizeFormat !== validFileFormats.kb && sizeFormat !== validFileFormats.mb && sizeFormat !== validFileFormats.gb)
            return;
        if (fileSize > fileSizeLimit)
            throw new Errors_1.BadRequestException(errorMessage);
    }
}
exports.Validation = Validation;
