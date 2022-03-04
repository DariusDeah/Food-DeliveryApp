export class NotFoundException extends Error{
  status: number;
  constructor(message: string = "Not Found") {
    super(message );
    this.status = 404
  }
}
export class BadRequestException extends Error{
  status: number;
  constructor(message:string = "Bad Request") {
    super(message);
    this.status = 400
  }
}
export class UnAuthorizedException extends Error{
  status: number;
  constructor(message: string = "Unauthorized") {
    super(message );
    this.status = 401
  }
}
export class Forbidden extends Error{
  status: number;
  constructor(message: string = "Forbidden") {
    super(message);
    this.status = 403
  }
}
