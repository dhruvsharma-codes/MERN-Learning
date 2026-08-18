const userMiddleware = (req, res, next) => {
  console.log("Middleware Executed Successfully");
  console.log("Method:", req.method);
  console.log("Url:", req.url);
  next();
};
module.exports = userMiddleware;
