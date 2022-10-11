import { GET_ALL_USERS, LOGOUT } from "../../constantes";

export const getAllUsersReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return (state = { data: action?.data });
    case LOGOUT:
      return (state = { data: [] });
    default:
      return state;
  }
};
