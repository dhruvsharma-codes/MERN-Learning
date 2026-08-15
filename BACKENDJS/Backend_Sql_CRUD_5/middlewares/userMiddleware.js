const userMiddleware = (req, res, next) => {
  console.log("Middleware Executed");
  console.log("Method:", req.method);
  console.log("Url:", req.url);

  next();
};

module.exports = userMiddleware;
