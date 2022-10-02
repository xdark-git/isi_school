import {
  CLOSED,
  CLOSE_CREATION_CONTENU_COURS_DIALOG,
  DISPLAYONECOURS,
  FOUND_ERROR_ON_CONTENU_COURS_CREATION,
  LOGOUT,
  NOCOURSFOUND,
  NO_ERROR_FOUND,
  OPENED,
  OPEN_CREATION_CONTENU_COURS_DIALOG,
} from "../../constantes";

export const getOneCoursReducers = (state = {}, action) => {
  switch (action.type) {
    case DISPLAYONECOURS:
      return { data: action?.data, opened: action?.opened };
    case NOCOURSFOUND:
      return { opened: action?.opened };
    case LOGOUT:
      return (state = {});
    default:
      return state;
  }
};

export const contenuCoursCreation = (state = { status: CLOSED, error: NO_ERROR_FOUND }, action) => {
  switch (action.type) {
    case OPEN_CREATION_CONTENU_COURS_DIALOG:
      return (state = { status: OPENED, error: NO_ERROR_FOUND });
    case FOUND_ERROR_ON_CONTENU_COURS_CREATION:
      return (state = { status: OPENED, error: action?.error });
    case CLOSE_CREATION_CONTENU_COURS_DIALOG:
      return (state = { status: CLOSED, error: NO_ERROR_FOUND });
    case LOGOUT:
      return (state = { status: CLOSED, error: NO_ERROR_FOUND });
    default:
      return state;
  }
};
