const initialState = {};

export default function appReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}
