import * as api from "../../api";
import { closeLoaderComponent, DISPLAYONECOURS } from "../../constantes";

export const getTheCours = (id, navigate) => async (dispatch) => {
  try {
    const cours = await api.getOneCours(id);
    const data = cours?.data;
    dispatch({ type: DISPLAYONECOURS, data, opened: true });
    navigate("/cours/" + data?.cours?._id);
    dispatch({ type: closeLoaderComponent });
  } catch (error) {
    // console.log(error);
  }
};
