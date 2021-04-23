const cors = require("cors");
const express = require("express");
const app = express();
require("./config/dbConnect");

app.use(cors());
//using json format
app.use(express.json());

// app.use("/auth", require("./router/authRouter"));
// app.use("/users", require("./router/userRouter"));
app.use("/todo", require("./router/todoRouter"));

app.listen(4000, () => console.log("we're in"));
