import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "./api";

const users = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getData: (state, action) => {
      state.users = action.payload;
    },
    addData: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const getUser = () =>
  apiCall({
    url: "/users",
    method: "get",
    onSuccess: users.actions.getData.type,
  });

export const saveUser = (data) =>
  apiCall({
    url: `/users`,
    method: "post",
    data,
    onSuccess: users.actions.addData.type,
  });

export default users.reducer;
