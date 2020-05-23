const { Schema, model } = require("mongoose");

const NumberSchema = new Schema({
  values: [Number],
});

module.exports = model("Number", NumberSchema);
