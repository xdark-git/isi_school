import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContenuCoursAction } from "../../../../../actions/cours/contenuCours";
import { CLOSE_CREATION_CONTENU_COURS_DIALOG } from "../../../../../constantes";
import "./asset/css/style.css";
const NewContenuDialog = (cours) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [titleError, setTitleError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const [filesError, setFilesError] = useState(null);
  const listOffiles = files.map((el, index) => {
    return (
      <div key={index}>
        <img src={process.env.PUBLIC_URL + "/img/pdf.png"} alt="" />
        <span>{el?.name}</span>
        <i
          className="fa-solid fa-trash"
          onClick={() => {
            setFiles(
              files.filter((item) => {
                return files.indexOf(item) !== index;
              })
            );
          }}
        ></i>
      </div>
    );
  });
  const errorCatched = useSelector((state) => state?.contenuCours?.error);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      files.length === 0 ||
      title === null ||
      title.length === 0 ||
      description === null ||
      description.length === 0
    ) {
      if (files.length === 0) setFilesError("Au minimum, un fichier est requis");
      else setFilesError(null);
      if (title === null || title.length === 0) setTitleError("Le titre est requis");
      else setTitleError(null);
      if (description === null || description.length === 0)
        setDescriptionError("La description est requise");
      else setDescriptionError(null);
      return;
    }
    const formData = new FormData();
    formData.append("titre", title);
    formData.append("description", description);
    formData.append("cours_id", cours?.cours?._id);
    files.forEach((file) => {
      formData.append("files", file);
    });
    dispatch(addContenuCoursAction(cours?.cours?._id, formData, navigate));
    setErrorsNull();
  };
  const setErrorsNull = () => {
    // setFiles([]);
    // setTitle(null);
    // setDescription(null);
    setTitleError(null);
    setDescriptionError(null);
    setFilesError(null);
  };
  useEffect(() => {
    description != null
      ? (document.getElementById("description-textcontent").textContent = description)
      : (document.getElementById("description-textcontent").textContent = "");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description]);
  return (
    <div id="nouveauContenuCours" className="nouveauContenuCours">
      <div className="nouveauContenuCours-body">
        <div className="title">Nouvel élément</div>
        <form onSubmit={handleSubmit}>
          {/* displaying errors */}
          {errorCatched?.message && <div className="error">{errorCatched?.message}</div>}
          {/* displaying errors */}
          <label htmlFor="titre-contenu">Titre</label>
          {/* displaying errors */}
          {errorCatched?.errors?.titre.length > 0 && (
            <div className="error">{errorCatched?.errors?.titre}</div>
          )}
          {/* displaying errors */}
          <div className="error">{titleError !== null && `${titleError}`}</div>
          <input
            name="titre"
            id="titre-contenu"
            value={title ? title : ""}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description-contenu">Description</label>
          {/* displaying errors */}
          {errorCatched?.errors?.description.length > 0 && (
            <div className="error">{errorCatched?.errors?.description}</div>
          )}
          <div className="error">{descriptionError !== null && `${descriptionError}`}</div>
          {/* displaying errors */}
          <div
            id="description-textcontent"
            contentEditable="true"
            onInput={(e) => {
              setDescription(e.currentTarget.textContent);
            }}
          ></div>
          <div className="televerser-contenu">
            {/* displaying errors */}
            <div className="error">{filesError !== null && `${filesError}`}</div>
            {/* displaying errors */}
            <div className="televersement-detail">
              <div className="upload-file">
                <label htmlFor="contenu-files">
                  Téléverser
                  <i className="fa-solid fa-circle-plus"></i>
                </label>
                <input
                  type="file"
                  name="files"
                  className="contenu-files"
                  id="contenu-files"
                  onChange={(e) => {
                    if (files.length < 4) setFiles([...files, e.target.files[0]]);
                    if (files.length === 4) setFilesError("Vous avez atteint la limite");
                  }}
                />
              </div>
              <div className="contenu-supporte">
                <div className="fichiers-supportes">fichiers supportés</div>
                <div className="type-fichier-supporte">
                  ZIP, RAR, PDF, PDF, MP3, MP4, DOCX, pptx, xlsx ...
                </div>
              </div>
            </div>
            <div className="contenu-televerses">
              {/* <div>
                <img src={process.env.PUBLIC_URL + "/img/pdf.png"} alt="" />
                <span>example.pdf</span>
                <i className="fa-solid fa-trash"></i>
              </div> */}
              {listOffiles}
            </div>
            <div className="nouveauContenuCours-buttons">
              <button type="submit" className="btn-ajouter">
                Ajouter
              </button>
              <button
                className="btn-annuler"
                onClick={() => dispatch({ type: CLOSE_CREATION_CONTENU_COURS_DIALOG })}
              >
                Annuler
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewContenuDialog;
