// Modules
import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
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
// Homepage API
server.get("/", (request, response) => {
    response.status(200).json({ success: true, message: "Welcome to the Homepage!" });
});
// Launch Server
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
