import dbConnect from '../../../backend/utils/dbConnect';
import nc from 'next-connect';
import {
  getProducts,
  createProduct,
} from '../../../backend/controllers/products';
// import withProtect from '../../../backend/lib/middleware/withProtect';
import { productUploadHandler } from '../../../backend/lib/multer';

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
      getProducts(res, query);
    } else {
      getProducts(res);
    }
  })
  // .use(withProtect)
  .use(productUploadHandler)
  .post(async (req, res) => {
    await dbConnect();
    const { body } = req;
    createProduct(req, res, body);
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
