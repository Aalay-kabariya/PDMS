const mongoose = require('mongoose')

const medicineSchema = new mongoose.Schema({
    Name: String,
    Description: String,
    DosageForm: String,
    Strength: String,
    Availability: String, 
    Photo: String,
    MRP: String,
    Key: Number,
})

const MedicineList =  mongoose.model("Medicine", medicineSchema);
module.exports = MedicineList;