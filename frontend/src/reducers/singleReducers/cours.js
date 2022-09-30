import { DISPLAYONECOURS, LOGOUT, NOCOURSFOUND } from "../../constantes";

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
