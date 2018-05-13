const mongoose = require('mongoose');
const { Schema } = mongoose;

const supplementSchema = new Schema({
  name: String,
  size: String, // Bottle size
  quantity: String, // Number of bottles
  dose: String,
  price: { type: Number, default: 0 },
  merchant: String,
  examineLink: String
});

module.exports = supplementSchema;