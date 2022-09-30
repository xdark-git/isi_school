export const handleModelIdOnFindCours = (err, res) => {
  if (err.message.includes("Cast to ObjectId failed for value"))
    return res.status(404).json({ message: "Cours introuvable" });

  return err;
};
