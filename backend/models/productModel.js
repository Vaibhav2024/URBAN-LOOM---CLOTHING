import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    sizes: {
        type: Array,
        required: true
    },
    bestseller: {
        type: Boolean
    },
    date: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    reviewCount: {
        type: Number,
        default: 12
    },
    discount: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

export const productModel = mongoose.model.product || mongoose.model("product", productSchema)