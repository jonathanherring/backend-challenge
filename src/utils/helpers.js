exports.parseQuery = (query) => {
    let queryStr = JSON.stringify(query);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in|elemMatch)\b/g, match => `$${match}`)
    return JSON.parse(queryStr)
}
