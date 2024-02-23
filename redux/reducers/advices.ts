import { createAction, createReducer } from '@reduxjs/toolkit';

interface AdvicesState {
  test: string | null;
}

const initialState: AdvicesState = {
  test: null,
};

export const testAction = createAction<string>('advices/test');

const advicesReducer = createReducer(initialState, (builder) => {
  builder.addCase(testAction, (state, action) => {
    state.test
  });
});

export default advicesReducer;
