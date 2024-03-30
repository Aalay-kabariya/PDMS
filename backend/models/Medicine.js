const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema(
  {
    Name: String,
    Description: String,
    Strength: String,
    Availability: String,
    Availability: String,
    Photo: String,
    MRP: String,
    Key: Number,
    DosageForm: String,
  },
  { collection: "medicines" }
);

const Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;
