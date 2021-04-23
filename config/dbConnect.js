mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/todo", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected succesfully"))
  .catch((err) => console.log(err.message));
