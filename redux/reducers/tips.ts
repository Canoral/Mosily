import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axiosInstance from "../../commons/axios";
import { ITips } from "../../src/@types/tips";

interface TipsState {
  tips: ITips[] | null;
}

const initialState: TipsState = {
  tips: null,
};

export const getTips = createAsyncThunk(
  "Advice reducer/getTips", // nom de l'action
  async () => {
    const response = await axiosInstance.get("/tips/all");
    return response.data;
  }
);

export const deleteAdvice = createAsyncThunk(
  "Advice reducer/deleteAdvice", // nom de l'action
  async (adviceId: number) => {
    const response = await axiosInstance.put(`/alerts/update/${adviceId}`);
    return response.data;
  }
);

const tipsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getTips.fulfilled, (state, action) => {
      state.tips = action.payload;
    })
    .addCase(deleteAdvice.fulfilled, (state, action) => {
      if (state.tips) {
        state.tips = state.tips?.filter(
          (alert) => alert.id !== action.meta.arg
        );
      }
    });
});

export default tipsReducer;
