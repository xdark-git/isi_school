import { Administration } from "../model/Administration.js";
import path, { resolve } from "path";

const __dirname = path.resolve();

export const getCreateAdminPage = (req, res) => {
  res.sendFile(__dirname + "/views/createUser.html");
};

let values;
let arrayOfValues;
let date = new Date();
let unix = Date.parse(date);
// let lienProfile = "User/" + unix;

export const createAdmin = (req, res) => {
  Administration.find(
    {
      $or: [
        { email: req.body.email },
        { username: req.body.username },
        { numeroDeTel: req.body.numeroDeTel },
      ],
    },
    (error, data) => {
      let email = false;
      let username = false;
      let numeroDeTel = false;
      if (data.length > 0) {
        for (let i in data) {
          if (data[i].email == req.body.email) email = true;
          if (data[i].username == req.body.username) username = true;
          if (data[i].numeroDeTel == req.body.numeroDeTel) numeroDeTel = true;
        }
        return res.status(409).json({
          email: email,
          username: username,
          numeroDeTel,
          numeroDeTel,
        });
      } else {
        try {
          Administration.create(req.body);
          res.status(201).json({message: "success"});
        } catch (error) {
          res.status(409).json({ message: error.message });
        }
      }
    }
  );
};

/**
 * shuffle array to create a userlink
 */
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  let newArr = [];
  let count = 0;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    if (count % 2 == 0 && isNaN(array[randomIndex])) {
      //console.log(array[randomIndex] + " is not a number");
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex].toUpperCase(),
        array[currentIndex],
      ];
    } else {
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    count++;
  }

  return array.join("");
}
