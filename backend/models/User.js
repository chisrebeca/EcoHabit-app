const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nume: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // unique asigură că nu avem duplicate
  parola: { type: String, required: true },
  puncte: { type: Number, default: 0 },
  nivel: { type: Number, default: 1 },
  dataCrearii: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);