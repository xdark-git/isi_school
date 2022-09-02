import jwt from "jsonwebtoken";
import "dotenv/config";
import verifyToken from "../functions/token/verifyToken.js";
import verifyRefreshToken from "../functions/refreshToken/verifyRefreshToken.js";
/*
  we first verify if the token is sent or not 
  then we check if the token sent is still valid or didn't expire
  then we do the same for the refresh token
*/
const auth = async (req, res, next) => {
  try {
    const token = req?.headers?.authorization.split(" ")[1];

    const decodedToken = await verifyToken(token, res);

    if (decodedToken == "expired") {
      return res.status(401).json({
        message: "Token expired",
      });
    }

    if (decodedToken == "invalid") {
      return res.status(401).json({
        message: "Invalid Token",
      });
    }
    req.user = decodedToken;
    req.token = token;

    next();
  } catch (error) {
    return res.status(400).json({ message: "Token not found" });
  }
};

export default auth;
