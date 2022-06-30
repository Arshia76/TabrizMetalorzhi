import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  passwrod: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['user,admin'],
    default: 'admin',
  },
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
