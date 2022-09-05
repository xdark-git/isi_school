import { DISPLAYONECLASSE, GETALLCLASSES } from "../../constantes";

export const getAllClassesReducers = (state = [], action) => {
  switch (action.type) {
    case GETALLCLASSES:
      return action?.data;
    default:
      return state;
  }
};

export const getOneClasseReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAYONECLASSE:
      return action?.data;
    default:
      return state;
  }
};
