const mongoose = require("mongoose");
const URL = "mongodb+srv://pratik:test123@cluster0.am5xmqs.mongodb.net/Netflix";

async function connect() {
  try {
    await mongoose.connect(URL);
    console.log("Connected To mongoDB");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connect;
