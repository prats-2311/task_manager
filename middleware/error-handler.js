const CustomError = require("../errors/custom-error");
module.exports = errorHandlerMiddleware = (err, req, res, next) => {
  //   console.log(err);
  if (err instanceof CustomError) {
    return res.status(err.status).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Something went wrong" });
};
