const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    mail: {
      type: String,
      require: true,
      unique: true
    },
    password: {
      type: String,
      require: true,
      unique: true
    },
    image: {
      type: String,
      default: "https://images.media-allrecipes.com/images/75131.jpg"
    },
    description: String,
    name: {
      type: String,
      require: true,
      unique: true
    },
    role: {
      type: String,
      default: 'VISITOR',
      enum: ['ADMIN', 'MEMBER','VISITOR']
    },
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
