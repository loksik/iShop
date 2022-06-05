class APIError extends Error{
    constructor(status, massage) {
        super()
        this.status = status
        this.massage = massage

    }
    static badRequest(massage){
        return new APIError(400,massage)
    }

    static forbidden(massage){
        return new APIError(403,massage)
    }

    static notFound(massage){
        return new APIError(404,massage)
    }

    static internalServerError(massage){
        return new APIError(500,massage)
    }

}

module.exports = APIError