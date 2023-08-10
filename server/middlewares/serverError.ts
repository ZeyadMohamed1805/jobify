import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

const serverError = async ( error: ErrorRequestHandler, request: Request, response: Response, next: NextFunction ) => {
    return response.status( 500 ).json( { success: false, message: "Something Went Wrong.", error: error } );
}

export default serverError;