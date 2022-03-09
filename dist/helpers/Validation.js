"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const Errors_1 = require("../utils/Errors");
class Validations {
    requiredString(field, errorMessage) {
        if (!field || !field.length)
            throw new Errors_1.BadRequestException(errorMessage);
    }
    requiredInt(field, errorMessage) {
        if (!field || field <= 0)
            throw new Errors_1.BadRequestException(errorMessage);
    }
    matchesValue(field, value, errorMessage) {
        if (field !== value)
            throw new Errors_1.BadRequestException(errorMessage);
    }
    matchesValues(field, values, errorMessage) {
        if (!values.includes(field))
            throw new Errors_1.BadRequestException(errorMessage);
    }
    isEmail(field, errorMessage) {
        const emailFormat = /\@[a-z]*\b\.\b[a-z]*\b/;
        if (!field.length || !field.match(emailFormat))
            throw new Errors_1.BadRequestException(errorMessage);
    }
    validateLength(field, requiredLength, errorMessage) {
        if (field.length < requiredLength)
            throw new Errors_1.BadRequestException(errorMessage);
    }
    fileSizeValidation(fileSize, limit, errorMessage) {
        var _a, _b;
        //would be neat if caller could specify file size in format: '10mb' , '100mb'
        //step 1: make sure the callers given format is valid
        let validFileUnits;
        (function (validFileUnits) {
            validFileUnits["kb"] = "kb";
            validFileUnits["mb"] = "mb";
            validFileUnits["gb"] = "gb";
        })(validFileUnits || (validFileUnits = {}));
        const unitConversionsFromKiloBytes = {
            kb: 1024,
            mb: Math.pow(1024, 2),
            gb: Math.pow(1024, 3)
        };
        //by default the file size limit is the size of the provided file 
        let fileSizeLimit = fileSize;
        const limitUnit = (_a = limit.match(/[a-z]/g)) === null || _a === void 0 ? void 0 : _a.join("");
        const limitValue = (_b = limit.match(/[0-9]/g)) === null || _b === void 0 ? void 0 : _b.join("");
        // step 2: if limit unit is not a valid unit type end function and return
        if (limitUnit !== validFileUnits.kb && limitUnit !== validFileUnits.mb && limitUnit !== validFileUnits.gb)
            return;
        //step 3: if RegExp finds a valid limit unit and limit value multiply limit value by according limit unit conversion
        if ((limitUnit === null || limitUnit === void 0 ? void 0 : limitUnit.length) && (limitValue === null || limitValue === void 0 ? void 0 : limitValue.length)) {
            fileSizeLimit = parseInt(limitValue, 10) * unitConversionsFromKiloBytes[limitUnit];
        }
        //step 4
        if (fileSize > fileSizeLimit)
            throw new Errors_1.BadRequestException(errorMessage);
    }
}
exports.Validation = new Validations();