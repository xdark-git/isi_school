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
  // if (!req?.cookies.token) {
  //   return res.status(401).json({ message: "Missing cookie" });
  // }

  const token = req.body?.token;

  const decodedToken  = await verifyToken(token);

  if (decodedToken == false) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // const refreshToken =req.body?.refreshToken;
  // const decodedRefreshToken = await verifyRefreshToken(refreshToken)
  
  // if( decodedRefreshToken == false){
  //   return res.status(401).json({ message: "Invalid token" });
  // }
  
  req.refreshToken = refreshToken;

  next();
  // const token = req.headers.Authorization.split(" ")[1];

  // req.userId = decodedData?.id;
};

export default auth;
