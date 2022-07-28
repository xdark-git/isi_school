import { Status } from "../model/Status.js";

/*
    1.Check if there isn't any status using the same name
    2.create the new status
    3.send a succes message
    else 
        send the error message
 */
export const createStatus = (req, res) => {
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
          Status.create({ nom: req.body.nom }).then(
            res.status(201).json({ message: "Created" })
          );
        } catch (error) {
          res.status(500).json({ message: "Internal Server Error" });
        }
      }
    }
  );
};
