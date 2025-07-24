const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  products: [String],
  total: Number,
  user: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
