const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        airport: { type: Schema.Types.ObjectId, ref: 'Airport' },
        quarantine: Boolean,
        migrationTime: {
            type: Number
        },
        positiveExperience: {
            type: String,
            required: true,
            default: 'Sin comentarios',
            minlength: 2,
            maxlength: 250,
            trim: true,
            set: value => value.charAt(0).toUpperCase() + value.substring(1)
        },
        negativeExperience: {
            type: String,
            required: true,
            default: 'Sin comentarios',
            minlength: 2,
            maxlength: 250,
            trim: true,
            set: value => value.charAt(0).toUpperCase() + value.substring(1)
        },
        rating: {
            type: Number,
            min: 1,
            max: 10
        },
        requirements: {
            pcr: Boolean,
            vaccine: Boolean,
            greenPassport: Boolean
        }
    },
    {
        timestamps: true
    }
);
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

