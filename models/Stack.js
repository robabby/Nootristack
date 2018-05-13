const mongoose = require('mongoose');
const { Schema } = mongoose;
const SupplementSchema = require('./Supplement');

const stackSchema = new Schema({
  title: String,
  cost: { type: Number, default: 0 },
  supplements: [SupplementSchema],
  isActive: { type: Boolean, default: true },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateCreated: Date,
  dateModified: Date
});

mongoose.model('stacks', stackSchema);
