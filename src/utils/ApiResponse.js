// Custom class to create a standard API success response
class ApiResponse {

    // Constructor to initialize response details
    constructor(statusCode, data, message = "Success"){

        // HTTP status code (200, 201, etc.)
        this.statusCode = statusCode

        // Actual data returned from API (user info, products, etc.)
        this.data = data

        // Response message (default = "Success")
        this.message = message

        // Boolean flag to indicate request success
        // If statusCode is less than 400 → success = true
        // If statusCode is 400 or above → success = false
        this.success = statusCode < 400
    }
}

// Export the class so it can be used in controllers
export { ApiResponse };
