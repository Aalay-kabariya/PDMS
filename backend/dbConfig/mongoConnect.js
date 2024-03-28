
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://MedicineDatabase:medsprint@medicinecluster.9qggxhb.mongodb.net/?retryWrites=true&w=majority&appName=MedicineCluster/Pharmacy")
        console.log('connected to mongodb')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB