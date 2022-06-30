import mongoose from 'mongoose';

const ProductModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    subCategory: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Product || mongoose.model('Product', ProductSchema);
