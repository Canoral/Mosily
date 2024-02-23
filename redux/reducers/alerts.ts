import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import { IAlerts } from "../../src/@types/alertes";
import axiosInstance from "../../commons/axios";
interface AlertesState {
  alerts: IAlerts[] | null;
}

const initialState: AlertesState = {
  alerts: null,
};

export const getAlerts = createAsyncThunk(
  "Alerts reducer/getAlerts", // nom de l'action
  async () => {
    const response = await axiosInstance.get("/alerts/all");
    return response.data;
  }
);

const alertesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAlerts.fulfilled, (state, action) => {
    console.log("state :", state);
    console.log("action :", action);
  });
});

export default alertesReducer;
