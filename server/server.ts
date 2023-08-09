// Modules
import express, { Express, Request, Response } from "express";

// Decalre The Server & Port Number
const server: Express = express();
const port = process.env.PORT || 5000;

// Homepage API
server.get( "/", ( request: Request, response: Response ) => {
    response.status( 200 ).json( { success: true, message: "Welcome to the Homepage!" } );
} );

// Launch Server
server.listen( port, () => console.log( `Server is running on http://localhost:${ port }` ) )