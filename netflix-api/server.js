const express = require("express");
const connect = require("./db");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const app = express();

app.use(cors());
app.use(express.json());

connect();

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("Listening at port 5000");
});
