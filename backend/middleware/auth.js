import jwt from "jsonwebtoken";
import "dotenv/config";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.Authorization.split(" ")[1];
    let decodedData = jwt.verify(token, process.env.SECRET_JWT);

    req.userId = decodedData?.id;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
