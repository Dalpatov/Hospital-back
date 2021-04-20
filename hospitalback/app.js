const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const Schema = mongoose.Schema;
const cors = require("cors");
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
const userScheme = new Schema({
  "login": String,
  "password": String,
});
const url = "mongodb+srv://restart987:restart987@cluster0.20a2n.mongodb.net/BDTODO?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});


const User = mongoose.model("users", userScheme);

app.post('/createUser', (req, res) => {
  const user = new User({
    login: req.body.login,
    password: req.body.password,
  });
  user.save().then(result => {
    User.find().then(result => {
    res.send({data:result});
    })
});
})

app.post('/LogIn', (req, res) => {
  const user = new User({
    login: req.body.login,
    password: req.body.password,
  });
  user.save().then(result => {
    User.find().then(result => {
    res.send({data:result});
    })
});
})

app.get('/allUsers',(req, res) => {
  User.find().then(result => {
    res.send({data:result});
  })
})

app.listen(8000,()=>{
  console.log('Still 8000')
});
