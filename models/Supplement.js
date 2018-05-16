const mongoose = require('mongoose');
const { Schema } = mongoose;

const supplementSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  quantity: String, // Number of bottles
  bottleSize: Number, // Bottle size
  dose: String,
  servingSize: Number,
  price: { type: Number, default: 0 },
  merchantLink: String,
  examineLink: String
});

mongoose.model('supplements', supplementSchema);

module.exports = supplementSchema;
