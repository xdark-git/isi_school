import {
  closeLoaderComponent,
  loaderComponentClosed,
  loaderComponentOpened,
  openLoaderComponent,
} from "../../constantes";

export const loaderReducer = (state = { loader: loaderComponentClosed }, action) => {
  switch (action.type) {
    case openLoaderComponent:
      return (state = {
        loader: loaderComponentOpened,
      });
    case closeLoaderComponent:
      return (state = { loader: loaderComponentClosed });
    default:
      return state;
  }
};
