const endpointError = async (request, response) => {
    return response.status(404).json({ success: false, message: "Endpoint Not Found." });
};
export default endpointError;
