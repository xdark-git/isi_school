import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContenuCoursAction } from "../../../../../actions/cours/contenuCours";
import "./asset/css/style.css";
const NewContenuDialog = (cours) => {
  const dispatch = useDispatch();

  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(files.length === 0 && title === null && description === null) return ;
    const formData = new FormData();
    formData.append("titre", title);
    formData.append("description", description);
    formData.append("cours_id", cours?.cours?._id);
    files.forEach((file) => {
      formData.append("files", file);
    });
    dispatch(addContenuCoursAction(formData));
  };

  return (
    <div id="nouveauContenuCours" className="nouveauContenuCours">
      <div className="nouveauContenuCours-body">
        <div className="title">Nouvel élément</div>
        <form onSubmit={handleSubmit}>
          <div className="error">This will be the error message</div>
          <label htmlFor="titre-contenu">Titre</label>
          <input name="titre" id="titre-contenu" onChange={(e) => setTitle(e.target.value)} />
          <div className="error">This will be the error message</div>
          <label htmlFor="description-contenu">Description</label>
          {/* <input name="description" id="description-contenu" contenteditable="true"/> */}
          <div
            contentEditable="true"
            onInput={(e) => setDescription(e.currentTarget.textContent)}
          ></div>
          <div className="televerser-contenu">
            <div className="error">This will be the error message</div>
            {/* <div className="televerser">Téléverser un fichier</div> */}
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
                    setFiles([...files, e.target.files[0]]);
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
              <div>
                <img src={process.env.PUBLIC_URL + "/img/pdf.png"} alt="" />
                <span>example.pdf</span>
                <i className="fa-solid fa-trash"></i>
              </div>
            </div>
            <div className="nouveauContenuCours-buttons">
              <button type="submit" className="btn-ajouter">
                Ajouter
              </button>
              <button className="btn-annuler">Annuler</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewContenuDialog;
