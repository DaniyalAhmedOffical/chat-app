const INITIAL_STATE = {
  users: [
    {
      name: "daniyal",
      email: "daniyalaq111@gmail.com",
    },
    {
      name: "wahab",
      email: "WAHAB@gmail.com",
    },
  ],
};
export default (state = INITIAL_STATE, action) => {
  
    switch (action.type) {
    case "SETDATA":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
  }
  return state;
};
