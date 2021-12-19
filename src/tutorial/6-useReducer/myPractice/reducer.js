export const reducer = (state, action) => {
  if (action.type === "add_item") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "no_value") {
    return {
      ...state,

      isModalOpen: true,
      modalContent: "please enter value",
    };
  }
  if (action.type === "close_modal") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "remove_item") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item removed",
    };
  }
  throw new Error("no matching action error");
};
