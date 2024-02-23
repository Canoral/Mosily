import { createAction, createReducer } from "@reduxjs/toolkit";

interface TestState {
  buttonBurger: boolean;
}

const initialState: TestState = {
  buttonBurger: false,
};

export const togglerMenuBurger = createAction<boolean>(
  "Header reducer/Toggler menu burger"
);

const headerReducer = createReducer(initialState, (builder) => {
  builder.addCase(togglerMenuBurger, (state, action) => {
    state.buttonBurger = action.payload;
  });
});

export default headerReducer;
