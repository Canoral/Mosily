import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import { IAlerts } from "../../src/@types/alertes";
import axiosInstance from "../../commons/axios";
interface AlertesState {
  alerts: IAlerts[] | null;
  toggleAlert: string;
}

const initialState: AlertesState = {
  alerts: null,
  toggleAlert: "close",
};

export const togglerAlert = createAction<string>(
  "Alert reducer/Alert collapse toggle"
);

export const getAlerts = createAsyncThunk(
  "Alerts reducer/getAlerts", // nom de l'action
  async () => {
    const response = await axiosInstance.get("/alerts/all");
    return response.data;
  }
);

const alertesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAlerts.fulfilled, (state, action) => {
      state.alerts = action.payload;
    })
    .addCase(togglerAlert, (state, action) => {
      state.toggleAlert = action.payload;
    });
});

export default alertesReducer;
