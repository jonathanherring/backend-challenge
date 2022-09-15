const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {

    let error = {...err}
    error.message = err.message

    //Log to console for dev
    console.log(err);


    if(err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`
        error = new ErrorResponse(message, 404)
    }
    
    //Mongoose Duplicate key
    if(err.code === 11000) {
        const message = `Duplicate field value entered`
        error = new ErrorResponse(message, 400)
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'server error'
    });
};

module.exports = errorHandler;