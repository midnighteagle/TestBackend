// Custom Error class for handling API errors in a structured way
class ApiError extends Error {

    // Constructor to initialize error details
    constructor(
        statusCode,                 // HTTP status code (e.g., 400, 404, 500)
        message = "Something Went Wrong", // Default error message
        errors = [],                // Optional array to store detailed error info
        stack = ""                  // Optional custom stack trace
    ){
        // Call parent Error class constructor with message
        super(message)

        // HTTP status code for the error
        this.statusCode = statusCode

        // Additional data (kept null for error responses)
        this.data = null

        // Error message
        this.message = message

        // Indicates request failed
        this.success = false;

        // Stores multiple error details (useful for validation errors)
        this.errors = errors

        // If stack trace is passed manually, use it
        if(stack){
            this.stack = stack 
        }else{
            // Otherwise automatically capture stack trace
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

// Export the ApiError class so it can be used in other files
export { ApiError };
