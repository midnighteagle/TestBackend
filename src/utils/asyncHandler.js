// Utility function to handle async errors in Express controllers
const asyncHandler = (requestHandler) => {

    // Return a middleware function that Express can execute
    return (req, res, next) => {

        // Wrap the requestHandler inside a resolved Promise
        // This allows catching errors from async functions
        Promise.resolve(requestHandler(req, res, next))

        // If any error occurs, pass it to Express error middleware
        .catch((error) => next(error))
    }
}

// Export the utility so it can be used in controllers
export { asyncHandler };
