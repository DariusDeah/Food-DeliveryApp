"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const Errors_1 = require("../utils/Errors");
class Validation {
    static requiredString(field, errorMessage) {
        if (!field || !field.length)
            throw new Errors_1.BadRequestException(errorMessage);
        return;
    }
    static requiredInt(field, errorMessage) {
        if (!field || field <= 0)
            throw new Errors_1.BadRequestException(errorMessage);
        return;
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
        //temporary validation might replace with regEx
        const emailFormat = /\@[a-z]*\.[a-z]*/;
        if (!field.length || !field.match(emailFormat))
            throw new Errors_1.BadRequestException(errorMessage);
    }
}
exports.Validation = Validation;
