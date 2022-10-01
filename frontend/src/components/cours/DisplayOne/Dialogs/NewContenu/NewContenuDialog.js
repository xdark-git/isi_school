import React from "react";
import "./asset/css/style.css";
const NewContenuDialog = () => {
  return (
    <div id="nouveauContenuCours" className="nouveauContenuCours">
      <div className="nouveauContenuCours-body">
        <div className="title">Nouvel élément</div>
        <form>
          <div className="error">This will be the error message</div>
          <label htmlFor="titre-contenu">Titre</label>
          <input name="titre" id="titre-contenu" />
          <div className="error">This will be the error message</div>
          <label htmlFor="description-contenu">Description</label>
          {/* <input name="description" id="description-contenu" contenteditable="true"/> */}
          <div
            contentEditable="true"
            onInput={(e) => console.log(e.currentTarget.textContent)}
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
                <input type="file" name="files" className="contenu-files" id="contenu-files" />
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
                <i class="fa-solid fa-trash"></i>
              </div>
              
            </div>
            <div className="nouveauContenuCours-buttons">
                <button type="submit" className="btn-ajouter">Ajouter</button>
                <button className="btn-annuler">Annuler</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewContenuDialog;
