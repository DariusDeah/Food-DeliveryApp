interface IApiError{
  status: number;
  message: string;
}
export class NotFoundException extends Error implements IApiError{
  status: number;
  constructor(message: string = "Not Found") {
    super(message );
    this.status = 404
  }
}
export class BadRequestException extends Error implements IApiError{
  status: number;
  constructor(message:string = "Bad Request") {
    super(message);
    this.status = 400
  }
}
export class UnAuthorizedException extends Error implements IApiError{
  status: number;
  constructor(message: string = "Unauthorized") {
    super(message );
    this.status = 401
  }
}
export class Forbidden extends Error implements IApiError{
  status: number;
  constructor(message: string = "Forbidden") {
    super(message);
    this.status = 403
  }
}
