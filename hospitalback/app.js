const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

const apiRoutes = require ("./modules/routes/routes");
app.use("/", apiRoutes);
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


const url = "mongodb+srv://restart987:restart987@cluster0.20a2n.mongodb.net/BDTODO?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});

app.listen(8000,()=>{
  console.log('Still 8000')
});
