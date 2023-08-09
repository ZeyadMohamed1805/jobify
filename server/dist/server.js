// Modules
import express from "express";
// Decalre The Server & Port Number
const server = express();
const port = process.env.PORT || 5000;
// Homepage API
server.get("/", (request, response) => {
    response.status(200).json({ success: true, message: "Welcome to the Homepage!" });
});
// Launch Server
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
