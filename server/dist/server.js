// Modules
import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/jobs.js";
import serverError from "./middlewares/serverError.js";
import endpointError from "./middlewares/endpointError.js";
// Access Environment Variables
dotenv.config();
// Decalre The Server & Port Number
const server = express();
const port = process.env.PORT || 5500;
// Middlewares
server.use(cors({ origin: [`http://localhost:${port}`] }));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
process.env.NODE_ENV === "development" && server.use(morgan("dev"));
server.use("/api/v1/jobs", router);
server.use("*", endpointError);
server.use(serverError);
// Launch Server
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
