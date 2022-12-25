import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_PATH } from "./../../constants";

const initialState = {
  user: "",
  message: "",
  error: "",
  isLoading: false,
  isSuccess: false,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios(`${API_PATH}/api/login`, {
        method: "POST",
        data: {
          email,
          password,
        },
      });
      const data = await response.data;
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return { ...response };
      } else {
        return thunkAPI.rejectWithValue(response);
      }
    } catch (e) {
      console.log(e.response);
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, thunkAPI) => {
    try {
      const { first_name, last_name, email, phone, password } = user;
      const response = await axios(`${API_PATH}/api/register`, {
        method: "POST",
        data: {
          first_name,
          last_name,
          email,
          phone,
          password,
        },
      });
      const data = await response.data;
      if (response.status === 201) {
        localStorage.setItem("token", data.token);
        return { ...response };
      } else {
        return thunkAPI.rejectWithValue(response);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = payload.data;
      state.message = "Regsitration Successful";
    },
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.error = payload;
      console.log(payload);
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = payload.data;
      state.message = "Login Successful!";
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.error = payload;
      console.log(payload);
    },
  },
});

export const userSelector = (state) => state.auth;
