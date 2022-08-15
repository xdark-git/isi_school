import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyRefreshToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_JWT_REFRESH);
    return decoded;
  } catch (error) {
    return false;
  }
};
export default verifyRefreshToken;
