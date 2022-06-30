import multer from 'multer';

var storageProduct = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/products');
  },
  filename: function (req, file, cb) {
    cb(null, req.user.username + '-' + Date.now() + '-' + file.originalname);
  },
});

var storageAvatar = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/users');
  },
  filename: function (req, file, cb) {
    cb(null, req.user.username + '-' + Date.now() + '-' + file.originalname);
  },
});

var storageCategory = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/categories');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

var uploadProductImage = multer({ storage: storageProduct }).single('image');
var uploadCategoryImage = multer({ storage: storageCategory }).single('image');

export const productUploadHandler = (req, res, next) => {
  uploadProductImage(req, res, (err) => {
    if (err) {
      res
        .status(400)
        .json({ message: `Bad request, ${err.message}` })
        .end();
    } else {
      // special workaround for files validating with express-validator
      req.body.img = req.file;
      next();
    }
  });
};

export const categoryUploadHandler = (req, res, next) => {
  uploadCategoryImage(req, res, (err) => {
    if (err) {
      res
        .status(400)
        .json({ message: `Bad request, ${err.message}` })
        .end();
    } else {
      // special workaround for files validating with express-validator
      req.body.img = req.file;
      next();
    }
  });
};
