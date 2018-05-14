const mongoose = require('mongoose');
const { Schema } = mongoose;

const supplementSchema = new Schema({
  title: String,
  bottleSize: Number, // Bottle size
  quantity: String, // Number of bottles
  dose: String,
  servingSize: Number,
  price: { type: Number, default: 0 },
  merchant: String,
  examineLink: String
});

module.exports = supplementSchema;
