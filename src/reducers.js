const initalState = {
  value: 0
};

export const reducers = (state = initalState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        value: state.value + 1
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        value: state.value - 1
      };
    }

    default:
      return state;
  }
};
