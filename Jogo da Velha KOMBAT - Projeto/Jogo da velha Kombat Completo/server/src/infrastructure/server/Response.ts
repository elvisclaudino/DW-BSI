export interface IResponse {
    name: string;
    statusCode: number;
    message: string;
    data?: any;
}

export interface IResponseProps {
    message?: string;
    data?: any;
}

export function MissingMandatoryArgument({ data, message }) {
    this.name = "MISSING_MANDATORY_ARRGUMENTS";
    this.statusCode = 400;
    this.data = data;
    this.message = message;
}

export function AlreadyExistsError({ data, message }) {
    this.name = "ALREADY_EXISTS";
    this.statusCode = 409;
    this.data = data;
    this.message = message;
}

export function Created({ data, message }) {
    this.name = "CREATED";
    this.statusCode = 201;
    this.data = data;
    this.message = message;
}

export function NotFound({ data, message }) {
    this.name = "NOT_FOUND";
    this.statusCode = 404;
    this.data = data;
    this.message = message;
}

export function Unauthorized({ data, message }) {
    this.name = "UNAUTHORIZED";
    this.statusCode = 401;
    this.data = data;
    this.message = message;
}

export function Authorized(data, message) {
    this.name = "AUTHORIZED_REDIRECT";
    this.statusCode = 200;
    this.data = data;
    this.message = message;
}
