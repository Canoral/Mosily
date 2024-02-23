import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axiosInstance from "../../commons/axios";

interface AdvicesState {
  advices: [] | null;
}

const initialState: AdvicesState = {
  advices: null,
};

export const getAdvices = createAsyncThunk(
  "Advice reducer/getAdvices", // nom de l'action
  async () => {
    const response = await axiosInstance.get("/advices/all");
    return response.data;
  }
);

const advicesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAdvices.fulfilled, (state, action) => {
    state.advices = action.payload;
  });
});

export default advicesReducer;
