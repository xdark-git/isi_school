import {
  DISPLAYONECLASSE,
  GETALLCLASSES,
  NOCLASSEFOUND,
  ERRORONCLASSECREATION,
  CREATIONCLASSEDIALOGCLOSED,
  LOGOUT,
} from "../../constantes";

export const getAllClassesReducers = (state = { data: [] }, action) => {
  switch (action.type) {
    case GETALLCLASSES:
      return (state = { data: action?.data, status: "done" });
    case LOGOUT:
      return (state = { data: [] });
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
    case LOGOUT:
      return (state = {});
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
