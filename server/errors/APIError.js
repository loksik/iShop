class APIError extends Error{
    constructor(status, message) {
        super()
        this.status = status
        this.message = message
    }
    
    static badRequest(message){
        return new APIError(400, message)
    }

    static forbidden(message){
        return new APIError(403, message)
    }

    static notFound(message){
        return new APIError(404, message)
    }

    static internalServerError(message){
        return new APIError(500, message)
    }
}

module.exports = APIError
