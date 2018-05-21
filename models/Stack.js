const mongoose = require('mongoose');
const { Schema } = mongoose;
const SupplementSchema = require('./Supplement');

const stackSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  notes: String,
  cost: { type: Number, default: 0 },
  supplements: [SupplementSchema],
  isActive: { type: Boolean, default: true },
  dateCreated: Date,
  dateModified: Date
});

mongoose.model('stacks', stackSchema);
