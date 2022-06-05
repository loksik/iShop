const APIError = require('../errors/APIError')

module.exports = function (err, req, res, next) {
    if (err instanceof APIError) {
        return res.status(err.status).json({massage: err.massage})
    }
    return res.status(500).json({massage: 'Ошибка со стороны сервера, если вы сделали все правильно то обратитесь в поддержку.'})
}










