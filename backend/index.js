import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
//////////Routes//////////
import userRouter from "./routes/usersRoutes.js";
import statusRouter from "./routes/statusRoutes.js";
import classeRoutes from "./routes/classeRoutes.js";
import coursRoutes from "./routes/coursRoutes.js";
//////////Routes//////////
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

await mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error.message.toString()));

app.use("/api/user", userRouter);
app.use("/api/status", statusRouter);
app.use("/api/classe", classeRoutes);
app.use("/api/cours", coursRoutes);

//return a json error when visiting a page that does't exit
app.use("*", (req, res) => res.status(404).json({ error: "Not found Route" }));
