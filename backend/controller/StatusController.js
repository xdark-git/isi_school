import { Status } from "../model/Status.js";
import { Administration } from "../model/Administration.js";
/*
    1.Check if there isn't any status using the same name
    2.create the new status
    3.send a succes message
    else 
        send the error message
 */
export const createStatus = async (req, res) => {
  const user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);
    if (!user) {
      return res.status(401).json({ message: "Accès non autorisé" });
    }
  Status.find(
    {
      nom: req.body.nom,
    },
    (reqError, data) => {
      if (data.length > 0) {
        return res.status(409).json({
          message: "Conflict",
        });
      } else {
        try {
          Status.create({ nom: req.body.nom }).then(res.status(201).json({ message: "Created" }));
        } catch (error) {
          res.status(500).json({ message: "Internal Server Error" });
        }
      }
    }
  );
};

export const getAllStatus = async (req, res) => {
  try {
    //checking if the user still exist and is Admin
    const user = await Administration.findById(req?.user?.id).where("isDeleted").equals(false);
    if (!user) {
      return res.status(401).json({ message: "Accès non autorisé" });
    }

    const status = await Status.find({}).select("-__v");
    return res.status(200).json({
      status,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};
