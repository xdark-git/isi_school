export const handleClasseError = (err) => {
  let error = {
    nom: "",
  };
  if (err.message.includes("Classe validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  return error;
};
