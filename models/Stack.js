const mongoose = require('mongoose');
const { Schema } = mongoose;
const SupplementSchema = require('./Recipient');

const stackSchema = new Schema({
  name: String,
  cost: { type: Number, default: 0 },
  supplements: [SupplementSchema],
  active: { type: Boolean, default: true },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateCreated: Date,
  dateModified: Date
});

mongoose.model('stacks', stackSchema);
