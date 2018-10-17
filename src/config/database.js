const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = mongoose.connect(
  "mongodb://admin:admin123@ds137862.mlab.com:37862/todo-app"
);
