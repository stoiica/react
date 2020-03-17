import { SELECT_USER } from "../types";

const initialState = {
  nume: "",
  prenume: "",
  oras: "",
  email: "",
  telefon: "",
  statut: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SELECT_USER:
      return {
        nume: payload.nume,
        prenume: payload.prenume,
        oras: payload.oras,
        email: payload.email,
        telefon: payload.telefon,
        statut: payload.statut
      };
    default:
      return state;
  }
}
