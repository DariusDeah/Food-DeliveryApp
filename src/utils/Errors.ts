export interface ApiError{
  status: number;
  message: string;
}
export class NotFoundException extends Error implements ApiError{
  status: number;
  constructor(message: string = "Not Found") {
    super(message );
    this.status = 404
  }
}
export class BadRequestException extends Error implements ApiError{
  status: number;
  constructor(message:string ) {
    super(message);
    this.status = 400
  }
}
export class UnAuthorizedException extends Error implements ApiError{
  status: number;
  constructor(message: string = "Unauthorized") {
    super(message );
    this.status = 401
  }
}
export class Forbidden extends Error implements ApiError{
  status: number;
  constructor(message: string = "Forbidden") {
    super(message);
    this.status = 403
  }
}
export class ServerError extends Error implements ApiError{
  status: number;
  constructor(message: string = "Server Error") {
    super(message);
    this.status = 500
  }
}
