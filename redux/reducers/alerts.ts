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

export const deleteAlert = createAsyncThunk(
  "Alert reducer/deleteAlert", // nom de l'action
  async (alertId: number) => {
    const response = await axiosInstance.delete(`/alerts/delete/${alertId}`);
    return response.data;
  }
);

const alertesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAlerts.fulfilled, (state, action) => {
      state.alerts = action.payload;
    })
    .addCase(deleteAlert.fulfilled, (state, action) => {
      if (state.alerts) {
        state.alerts = state.alerts?.filter(
          (alert) => alert.id !== action.meta.arg
        );
      }
    });
});

export default alertesReducer;
