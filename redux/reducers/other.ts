import { createAction, createReducer } from "@reduxjs/toolkit";

interface TestState {
  buttonBurger: boolean;
  sidebar: boolean;
}

const initialState: TestState = {
  buttonBurger: false,
  sidebar: true,
};

export const togglerMenuBurger = createAction<boolean>(
  "Header reducer/Toggler menu burger"
);

export const togglerSidebar = createAction("Header reducer/Toggler sidebar");

const headerReducer = createReducer(initialState, (builder) => {
  builder.addCase(togglerMenuBurger, (state, action) => {
    state.buttonBurger = action.payload;
  });
  builder.addCase(togglerSidebar, (state) => {
    state.sidebar = !state.sidebar;
  });
});

export default headerReducer;
