const express = require('express')
const connectDB = require('./dbConfig/mongoConnect')
const mongoose = require('mongoose')
const bodyParser=require("body-parser");
const cors=require("cors");
const MedicineList = require("../backend/models/Medicine")
const morgan = require("morgan")
const app = express()

connectDB()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});


app.use(express.json()) 
app.get( '/', (req, res) => {
    res.send('hello')
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    
})

// // const medicineList = require('./routes/shop')
// app.get("/shop", async (req,res)=> {
//     const medicines = medicine.find()
//     .then((medicines) => {console.log(medicines);
//     res.json(medicines)})
//     .catch((e) => console.log(e))
// })

app.get("/shop", async (req, res) => {
    try {
        const medicines = await MedicineList.find();
        if (!medicines) {
            return res.status(404).json({ error: "No medicines found" });
          }
        res.json(medicines);
      } catch (error) {
        // console.log(Error.stack(error));
        console.error("Error fetching medicines:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
  });

app.listen(3000, () => console.log('Server running on port 3000'))