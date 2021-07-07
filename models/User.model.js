const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    mail: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function(email) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        },
        message: 'Ingresa un email válido'
      }
    },
    password: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true,
      default: "https://image.flaticon.com/icons/png/512/1200/1200919.png"
    },
    description: {
      type: String,
      required: true,
      default: 'Así soy yo',
      minlength: 2,
      maxlength: 250,
      trim: true,
      set: value => value.charAt(0).toUpperCase() + value.substring(1)
    },
    name: {
      type: String,
      
    },
    role: {
      type: String,
      default: 'MEMBER',
      enum: ['ADMIN', 'MEMBER']
    },
    path:{
      type: String
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
