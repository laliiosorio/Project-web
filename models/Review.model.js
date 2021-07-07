const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        airport: { type: Schema.Types.ObjectId, ref: 'Airport' },
        migrationTime: {
            type: Number
        },
        travelDate: {
            type: Date,
            required: true,
            default: Date.now()
        },
        experience: {
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
            }
        },
        rating: {
            type: Number,
            min: 1,
            max: 10
        },
        requirements: {
            pcr: {
                type: Boolean,
                required: true,
                default: false
            },
            vaccine: {
                type: Boolean,
                required: true,
                default: false
            },
            greenPassport: {
                type: Boolean,
                required: true,
                default: false
            },
            quarantine: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    },
    {
        timestamps: true
    }
);
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

