export const handleContenuError = (err, res) => {
  let error = {
    titre: "",
    description: "",
    cours_id: "",
  };
  // console.log(err?.message);
  if (err?.message.includes("Contenu validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  return error;
};
