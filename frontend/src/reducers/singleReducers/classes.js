import { GETALLCLASSES } from "../../constantes";

export const getAllClassesReducers = (state = [], action) => {
  switch (action.type) {
    case GETALLCLASSES:
      return action?.data;
    default:
      return state;
  }
};
