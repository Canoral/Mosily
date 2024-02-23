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
  "Tips reducer/getTips", // nom de l'action
  async () => {
    const response = await axiosInstance.get("/tips/all");
    return response.data;
  }
);

export const deleteTips = createAsyncThunk(
  "Tips reducer/deleteTips", // nom de l'action
  async (tipsId: number) => {
    const response = await axiosInstance.put(`/tips/update/${tipsId}`);
    return response.data;
  }
);

const tipsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getTips.fulfilled, (state, action) => {
      state.tips = action.payload;
    })
    .addCase(deleteTips.fulfilled, (state, action) => {
      if (state.tips) {
        state.tips = state.tips?.filter((tip) => tip.id !== action.meta.arg);
      }
    });
});

export default tipsReducer;
