let id = 0;

const petsReducer = (state = { pets: []}, action) => {
  switch(action.type) {
    case "ADD_PET":
      console.log('pets reducer, action:', action);
      let newPet = {
        ...action.payload,
        id: ++id
      }
      return {
        ...state,
        pets: [...state.pets, newPet]
      }
    default:
      return state;
  }
}

export default petsReducer;