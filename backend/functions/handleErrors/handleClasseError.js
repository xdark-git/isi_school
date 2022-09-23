export const handleClasseError = (err, res) => {
  let error = {
    nom: "",
  };
  if (err.message.includes("Classe validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  if (err.message.includes("Validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  if (err.message.includes("Cast to ObjectId failed for value")) {
    return res.status(404).json({ message: "Classe Introuvable" })
  }
  return error;
};

export const handleModelIdOnFindError = (err) => {
  if (err.message.includes("Cast to ObjectId failed for value")) return true;
  else return false;
}
