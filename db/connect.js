const mongoose = require("mongoose");
connectionString =
  "mongodb+srv://prateek:Quested741@cluster0.isgenaj.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

async function main() {
  return mongoose.connect(connectionString);
  //   , {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useFindAndModify: false,
  //     useUnifiedTopology: true,
  //   }
}
module.exports = main;
