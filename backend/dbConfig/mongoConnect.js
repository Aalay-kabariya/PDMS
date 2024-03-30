const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://MedicineDatabase:medsprint@medicinecluster.9qggxhb.mongodb.net/Pharmacy"
    );
    console.log("connected to mongodb");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
