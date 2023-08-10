const serverError = async (error, request, response, next) => {
    return response.status(500).json({ success: false, message: "Something Went Wrong.", error: error });
};
export default serverError;
