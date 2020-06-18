import { combineReducers } from "redux";

const initialState = {
  pet: "",
};

const pet = (state = initialState, action) => {
  switch (action.type) {
    case "CHOOSE_PET":
      return action.payload;

    default:
      return state;
  }
};

export const reducer = combineReducers({
  pet,
});

export default reducer;

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "CHOOSE_PET":
//       return {
//         ...state,
//         pet: action.payload,
//       };
//     default:
//       return { ...state };
//   }
// };

// export default reducer;
