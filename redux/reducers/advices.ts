import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axiosInstance from "../../commons/axios";
import { IContent } from "../../src/@types/content";

interface AdvicesState {
  advices: IContent[] | null;
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

export const deleteAdvice = createAsyncThunk(
  "Advice reducer/deleteAdvice", // nom de l'action
  async (adviceId: number) => {
    const response = await axiosInstance.put(`/advices/update/${adviceId}`);
    return response.data;
  }
);

const advicesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAdvices.fulfilled, (state, action) => {
      state.advices = action.payload;
    })
    .addCase(deleteAdvice.fulfilled, (state, action) => {
      if (state.advices) {
        state.advices = state.advices?.filter(
          (advice) => advice.id !== action.meta.arg
        );
      }
    });
});

export default advicesReducer;
