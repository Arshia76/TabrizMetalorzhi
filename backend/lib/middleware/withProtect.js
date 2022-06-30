import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import UserModel from '../../models/User';

const withProtect = async (req, res, next) => {
  let token;

  if (req.headers && req.headers.cookie) {
    var cookies = cookie.parse(req.headers.cookie || '');
    token = cookies.token;
  }

  if (!token) {
    return res.status(401).json({
      message: 'ورود نامعتبر',
      success: false,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);
    req.user = await UserModel.findById(decoded.user._id).select('-password');
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: 'ورود نامعتبر',
    });
  }
};

export default withProtect;
