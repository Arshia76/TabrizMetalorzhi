import mongoose from 'mongoose';

const CategoryModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 40,
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  img: {
    type: String,
    required: true,
  },
  subCategories: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
    },
  ],
});

module.exports =
  mongoose.models.Category || mongoose.model('Category', CategorySchema);
