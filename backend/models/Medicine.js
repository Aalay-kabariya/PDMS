const mongoose = require('mongoose')
const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
const medicineSchema = new mongoose.Schema(
  {
    Name: String,
    Description: String,
    DosageForm: String,
    Strength: String,
    Availability: String, 
    Availability: String,
    Photo: String,
    MRP: String,
    Key: Number,
})
    DosageForm: String,
  },
  { collection: "Medicine" }
);

const MedicineList =  mongoose.model("Medicine", medicineSchema);
module.exports = MedicineList;
const Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;
