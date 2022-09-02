import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyToken = (token, res) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_JWT);
    return decoded;
  } catch (error) {
    const decoded = jwt.decode(token);
    console.log(error.toString());
    if (decoded?.exp * 1000 < new Date().getTime()) {
      return "expired";
    } else {
      return "invalid";
    }
  }
};
export default verifyToken;
