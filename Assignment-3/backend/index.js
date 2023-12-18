const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const { Output } = require('./models/outputDataModel')

const server = express();

const mongoUrl = 'mongodb://127.0.0.1:27017/mydb'

server.use(express.json());

// Option 1 :- Allow all origins with Default of cors(*)
server.use(cors());

server.post('/saveOutput', async (req,res) => {
    try {
        const outputValue = req.body;
        const outputVal = await Output.create(outputValue);
        res.status(200).json({ message: `output value ${outputVal.outputValue} saved successfully`});
    } catch (error) {
        console.error('Error saving output value:', error);
        res.status(500).json({ message: 'Error saving output value' });
    }
})

// Run the server
const portNo = 7171
server.listen(portNo, () => {
    console.log(`Server is running on port: ${portNo}`);
});

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Server conneted to mongoDB");
  })
  .catch((err) => {
    console.log('Error connecting to DB');
    console.log(err);
  });

  // logic to save output data to database
// const saveData = async(req,res) => {
   
// }

