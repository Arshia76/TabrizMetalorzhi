import ProductModel from '../models/Product';
import CategoryModel from '../models/Category';
import initMiddleware from '../lib/middleware/init-middleware';
import validateMiddleware from '../lib/middleware/validate-middleware';
import { check, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import deleteFile from '../lib/utility/deleteFile';

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check('name')
        .not()
        .isEmpty()
        .withMessage('لطفا نام محصول را وارد نمایید.')
        .isLength({ max: 50 })
        .withMessage('نام نمی‌تواند بیشتر از 50 کاراکتر باشد.'),
      check('description')
        .not()
        .isEmpty()
        .withMessage('لطفا متن محصول را وارد نمایید.')
        .isLength({ max: 1000 })
        .withMessage('متن محصول نمی‌تواند بیشتر از 1000 کاراکتر باشد.'),
    ],
    validationResult
  )
);

export const getProducts = async (res, query) => {
  if (query) {
    try {
      const data = await ProductModel.find({ category: query }).populate(
        'category'
      );

      res.status(200).json({
        message: 'عملیات موفق',
        data,
      });
    } catch (error) {
      res.status(500).json({
        message: 'خطا در بازیابی محصولات.',
        error,
      });
    }
  } else {
    try {
      const data = await ProductModel.find()
        .populate('category')
        .populate('subCategory');

      res.status(200).json({
        message: 'عملیات موفق',
        data,
      });
    } catch (error) {
      res.status(500).json({
        message: 'خطا در بازیابی محصولات.',
        error,
      });
    }
  }
};

export const getProduct = async (req, res, id) => {
  try {
    const data = await ProductModel.findOne({
      _id: mongoose.Types.ObjectId(id),
    })
      .populate('category')
      .populate('subCategory');

    return res.status(200).json({
      message: 'عملیات موفق',
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'خطا در بازیابی محصول',
      error,
    });
  }
};

export const updateProduct = async (req, res, body, id) => {
  await validateBody(req, res);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const data = await ProductModel.findOne({
      _id: mongoose.Types.ObjectId(id),
    });
    deleteFile(data.img);
    if (body.name) data.name = body.name;
    if (body.description) data.description = body.description;
    if (body.img) data.img = body.img.path;
    await data.save();

    return res.status(201).json({
      message: 'با موفقیت ویرایش شد.',
      data,
    });
  } catch (error) {
    deleteFile(body.img.path);
    return res.status(500).json({
      message: 'خطا در ویرایش محصول',
      error,
    });
  }
};

export const createProduct = async (req, res, body) => {
  await validateBody(req, res);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  if (!body.img) {
    return res.status(422).json({
      errors: {
        message: 'لطفا عکس پست را انتخاب کنید.',
        success: false,
      },
    });
  }

  if (!body.category) {
    return res.status(422).json({
      errors: {
        message: 'لطفا دسته‌بندی پست را انتخاب کنید.',
        success: false,
      },
    });
  }

  try {
    const { img, ...other } = body;

    const category = await CategoryModel.findOne({ _id: body.category });

    if (!category)
      return res.status(422).json({
        errors: {
          message: 'دسته‌بندی انتخاب شده موجود نمی‌باشد.',
          success: false,
        },
      });

    const data = await ProductModel.create({
      user: req.user._id,
      img: img.path,
      ...other,
    });
    return res.status(201).json({
      message: 'پست با موفقیت ایجاد شد.',
      data,
    });
  } catch (error) {
    deleteFile(body.img.path);
    return res.status(500).json({
      message: 'ایجاد پست با خطا مواجه شد.',
      error,
    });
  }
};

export const deleteProduct = async (res, id) => {
  try {
    const data = await ProductModel.findOneAndRemove({
      _id: mongoose.Types.ObjectId(id),
    });
    deleteFile(data.img);
    return res.status(200).json({
      message: 'پست با موفقیت حذف گردید.',
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'حذف پست با خطا مواجه شد.',
      error,
    });
  }
};
