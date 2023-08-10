import { Request, Response } from "express";

const endpointError = async ( request: Request, response: Response ) => {
    return response.status( 404 ).json( { success: false, message: "Endpoint Not Found." } );
}

export default endpointError;