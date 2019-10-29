

export const addPet = pet => {
  console.log('addPet', pet);
  return {
    type: "ADD_PET",
    payload: pet
  }
}