import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

/*
	routes will be  here
*/

const app = express();

app.use(cors());
app.use(express.json());

//return a json error when visiting a page that does't exit
app.use("*", (req, res) => res.status(404).json({ error: "Not found" }));
