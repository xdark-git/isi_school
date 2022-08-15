import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_JWT);
    return decoded;
  } catch (error) {
    return false;
  }
};
export default verifyToken;
