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
        .withMessage('لطفا نام دسته را وارد نمایید.')
        .isLength({ max: 40 })
        .withMessage('نام دسته نمی‌تواند بیشتر از 40 کاراکتر باشد.'),
      check('description')
        .not()
        .isEmpty()
        .withMessage('لطفا متن دسته را وارد نمایید.')
        .isLength({ max: 1000 })
        .withMessage('متن دسته نمی‌تواند بیشتر از 1000 کاراکتر باشد.'),
    ],
    validationResult
  )
);

export const getCategories = async (res, query) => {
  try {
    const data = await CategoryModel.find().populate('subCategories');

    res.status(200).json({
      message: 'عملیات موفق',
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'خطا در بازیابی دسته‌بندی‌ها.',
      error,
    });
  }
};

export const getCategory = async (req, res, id) => {
  try {
    const data = await CategoryModel.findOne({
      _id: mongoose.Types.ObjectId(id),
    }).populate('category');

    return res.status(200).json({
      message: 'عملیات موفق',
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'خطا در بازیابی دسته',
      error,
    });
  }
};

export const updateCategory = async (req, res, body, id) => {
  await validateBody(req, res);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const data = await CategoryModel.findOne({
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
      message: 'خطا در ویرایش دسته',
      error,
    });
  }
};

export const createCategory = async (req, res, body) => {
  await validateBody(req, res);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  if (!body.img) {
    return res.status(422).json({
      errors: {
        message: 'لطفا عکس دسته را انتخاب کنید.',
        success: false,
      },
    });
  }

  if (!body.name) {
    return res.status(422).json({
      errors: {
        message: 'لطفا نام دسته‌بندی را انتخاب کنید.',
        success: false,
      },
    });
  }

  try {
    const { img, subCategories, ...other } = body;

    const category = await CategoryModel.findOne({ name: body.name });

    if (category)
      return res.status(422).json({
        errors: {
          message: 'دسته‌بندی انتخاب شده موجود می‌باشد.',
          success: false,
        },
      });

    const data = await CategoryModel.create({
      img: img.path,
      subCategories: subCategories ? subCategories : [],
      ...other,
    });
    return res.status(201).json({
      message: 'دسته با موفقیت ایجاد شد.',
      data,
    });
  } catch (error) {
    deleteFile(body.img.path);
    return res.status(500).json({
      message: 'ایجاد دسته با خطا مواجه شد.',
      error,
    });
  }
};

export const deleteCategory = async (res, id) => {
  try {
    const data = await CategoryModel.findOneAndRemove({
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
