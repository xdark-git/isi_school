import {
  DISPLAYONECLASSE,
  GETALLCLASSES,
  NOCLASSEFOUND,
  ERRORONCLASSECREATION,
  CREATIONCLASSEDIALOGCLOSED
} from "../../constantes";

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

export const createOneClasseReducer = (state = {}, action) => {
  switch (action.type) {
    case ERRORONCLASSECREATION:
      return action.errors;
    case CREATIONCLASSEDIALOGCLOSED:
      return (state = {});
    default:
      return state;
  }
};
