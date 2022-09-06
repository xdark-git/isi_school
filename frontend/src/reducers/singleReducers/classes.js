import { DISPLAYONECLASSE, GETALLCLASSES, NOCLASSEFOUND } from "../../constantes";

export const getAllClassesReducers = (state = [], action) => {
  switch (action.type) {
    case GETALLCLASSES:
      return action?.data;
    default:
      return state;
  }
};

export const getOneClasseReducer = (state = {}, action) => {
  switch (action.type) {
    case DISPLAYONECLASSE:
      return { data: action?.data, opened: action.opened };
    case NOCLASSEFOUND:
      return { opened: action.opened };
    default:
      return state;
  }
};
