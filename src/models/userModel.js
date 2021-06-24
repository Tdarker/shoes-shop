var mongoose = require('mongoose');

const userShema = new mongoose.Schema(
  {
    username: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    isAdmin: { type: Boolean, default: false, require: true },
    phoneNumber: { type: Number, require: true },
    address: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userShema);
module.exports = User;
