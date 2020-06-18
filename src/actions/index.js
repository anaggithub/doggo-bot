const types = {
  CHOOSE_PET: "CHOOSE_PET",
};

export const choosePet = (pet) => {
  return {
    type: types.CHOOSE_PET,
    payload: pet,
  };
};
