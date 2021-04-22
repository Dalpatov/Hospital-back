const mongoose = require("mongoose");

const { Schema } = mongoose;
const tabs = new Schema({
    "patient": String,
    "doctor": String,
    "date": String,
    "sick": String
  });

  module.exports = Tabs = mongoose.model("tabs", tabs);