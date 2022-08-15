import jwt from "jsonwebtoken";
import "dotenv/config";

const generateRefreshToken = (data) => {
  const token = jwt.sign(data, process.env.SECRET_JWT, { expiresIn: "24h" });
  return token;
};
export default generateRefreshToken;