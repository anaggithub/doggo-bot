const initialState = {
  counter: 0,
  pet: "",
};

function reducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case "CHOOSE_PET":
      return {
        ...state,
        pet: action.payload.pet,
      };
    default:
      return { ...state };
  }
}

export default reducer;
