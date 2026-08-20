const userTestMiddleware = (req, res, next) => {
console.log("Test Middleware Executed");
console.log("Method:", req.method);
console.log("Url", req.url);
next();
}
module.exports = userTestMiddleware;