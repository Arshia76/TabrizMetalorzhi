import nc from 'next-connect';
// import withProtect from '../../../backend/lib/middleware/withProtect';
import dbConnect from '../../../backend/utils/dbConnect';
import {
  updateCategory,
  deleteCategory,
  getCategoryProducts,
} from '../../../backend/controllers/categories';
import { categoryUploadHandler } from '../../../backend/lib/middleware/multer';

const handler = nc({
  onError: (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
      success: false,
      message: 'خطای سرور',
    });
  },
  onNoMatch: (req, res) => {
    res.status(400).json({
      success: false,
      message: 'path not found',
    });
  },
});

const fileUpload = nc().put('/api/categories/:category', categoryUploadHandler);
const protect = nc()
  .put('/api/categories/:category')
  .delete('/api/categories/:category');

// .put('/api/categories/:category', withProtect)
// .delete('/api/categories/:category', withProtect);

handler
  .use(protect)
  .use(fileUpload)
  .get(async (req, res) => {
    await dbConnect();
    const { query } = req;
    const { category } = query;

    getCategoryProducts(req, res, category);
  })

  .put(async (req, res) => {
    await dbConnect();
    const { body, query } = req;
    const { category } = query;

    updateCategory(req, res, body, category);
  })
  .delete(async (req, res) => {
    await dbConnect();
    const { query } = req;
    const { category } = query;

    deleteCategory(res, category);
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
