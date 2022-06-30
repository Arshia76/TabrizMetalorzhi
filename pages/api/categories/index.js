import dbConnect from '../../../backend/utils/dbConnect';
import nc from 'next-connect';
import {
  createCategory,
  getCategories,
} from '../../../backend/controllers/products';
// import withProtect from '../../../backend/lib/middleware/withProtect';
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
})
  .get(async (req, res) => {
    const { query } = req;
    await dbConnect();
    if (query && Object.keys(query).length !== 0) {
      getCategories(res, query);
    } else {
      getCategories(res);
    }
  })
  // .use(withProtect)
  .use(categoryUploadHandler)
  .post(async (req, res) => {
    await dbConnect();
    const { body } = req;
    createCategory(req, res, body);
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
