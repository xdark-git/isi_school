import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = (data) => {
  const token = jwt.sign(data, process.env.SECRET_JWT, { expiresIn: "10" });
  return token;
};
export default generateToken;
