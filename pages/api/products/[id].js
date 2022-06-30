import nc from 'next-connect';
// import withProtect from '../../../backend/lib/middleware/withProtect';
import dbConnect from '../../../backend/utils/dbConnect';
import {
  getProduct,
  updateProduct,
  deleteProduct,
} from '../../../backend/controllers/products';
import { productUploadHandler } from '../../../backend/lib/middleware/multer';

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

const fileUpload = nc().put('/api/products/:id', productUploadHandler);
const protect = nc().put('/api/products/:id').delete('/api/products/:id');

// .put('/api/products/:id', withProtect)
// .delete('/api/products/:id', withProtect);

handler
  .use(protect)
  .use(fileUpload)
  .get(async (req, res) => {
    await dbConnect();
    const { query } = req;
    const { id } = query;
    getProduct(req, res, id);
  })

  .put(async (req, res) => {
    await dbConnect();
    const { body, query } = req;
    const { id } = query;

    updateProduct(req, res, body, id);
  })
  .delete(async (req, res) => {
    await dbConnect();
    const { query } = req;
    const { id } = query;

    deleteProduct(res, id);
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
