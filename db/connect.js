const mongoose = require("mongoose");
async function main(url) {
  return mongoose.connect(url);
  //   , {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useFindAndModify: false,
  //     useUnifiedTopology: true,
  //   }
}
module.exports = main;
