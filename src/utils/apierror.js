class ApiError extends Error{
    constructor(statusCode,message="Something went wrong",errors=[]){
        super(message);
        this.statusCode = statusCode
        this.data = null;
        this.errors = errors;
        this.success = false;
        Error.captureStackTrace(this, this.constructor);
    }
}

export {ApiError};