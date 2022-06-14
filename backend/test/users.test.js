import chai from "chai";
import { assert } from "chai";
import { Administration } from "../model/users.js";
import Browser from "zombie";

Browser.site = "http://localhost:5000/";

const browser = new Browser();

