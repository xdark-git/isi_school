import {
  CLOSED,
  DISPLAY_ALL_INFORMAITON_RECEIVED,
  DISPLAY_ALL_INFORMAITON_SENT,
  GET_ALL_INFORMATION_RECEIVED,
  GET_ALL_INFORMATION_SENT,
  GET_ONE_INFORMATION_RECEIVED,
  GET_ONE_INFORMATION_SENT,
  LOGOUT,
  OPENED,
} from "../../constantes";

export const informationReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_INFORMATION_RECEIVED:
      return;
    case GET_ONE_INFORMATION_RECEIVED:
      return;
    case GET_ALL_INFORMATION_SENT:
      return;
    case GET_ONE_INFORMATION_SENT:
      return;
    case LOGOUT:
      return state;
    default:
      return state;
  }
};

export const displayInformationReducer = (state = { mailbox: OPENED, sent: CLOSED }, action) => {
  switch (action.type) {
    case DISPLAY_ALL_INFORMAITON_RECEIVED:
      return { mailbox: OPENED, sent: CLOSED };
    case DISPLAY_ALL_INFORMAITON_SENT:
      return { mailbox: CLOSED, sent: OPENED };
    case LOGOUT:
      return (state = { mailbox: OPENED, sent: CLOSED });
    default:
      return (state = { mailbox: OPENED, sent: CLOSED });
  }
};
