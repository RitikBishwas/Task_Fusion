const mongoose = require("mongoose");
require("dotenv").config();

const conn = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};

conn();
