"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Forbidden = exports.UnAuthorizedException = exports.BadRequestException = exports.NotFoundException = void 0;
class NotFoundException extends Error {
    constructor(message = "Not Found") {
        super(message);
        this.status = 404;
    }
}
exports.NotFoundException = NotFoundException;
class BadRequestException extends Error {
    constructor(message = "Bad Request") {
        super(message);
        this.status = 400;
    }
}
exports.BadRequestException = BadRequestException;
class UnAuthorizedException extends Error {
    constructor(message = "Unauthorized") {
        super(message);
        this.status = 401;
    }
}
exports.UnAuthorizedException = UnAuthorizedException;
class Forbidden extends Error {
    constructor(message = "Forbidden") {
        super(message);
        this.status = 403;
    }
}
exports.Forbidden = Forbidden;
