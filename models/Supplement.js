const mongoose = require('mongoose');
const { Schema } = mongoose;

const supplementSchema = new Schema({
  name: String,
  size: String, // Bottle size
  quantity: String, // Number of bottles
  dose: String,
  price: { type: Number, default: 0 },
  merchant: String
});

// mongoose.model('supplements', supplementSchema);
module.exports = supplementSchema;
