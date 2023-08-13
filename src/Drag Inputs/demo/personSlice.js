import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
  name: "person",
  initialState: {
    name: ["vvv"],
    list: ["text", "Date", "checkBox", "file", "radio"],
    workspaceInput: [],
    storeindex: null,
    dragstore: false,
  },
  reducers: {
    setPersonName: (state, action) => {
      state.name = action.payload;
    },
    setList: (state, action) => {
      state.list = [...action.payload];
    },
    setWorkspaceInput: (state, action) => {
      state.workspaceInput = [...state.workspaceInput, action.payload];
    },
    setstoreindex: (state, action) => {
      state.storeindex = action.payload;
    },
    setdragstore: (state, action) => {
      state.dragstore = action.payload;
    },
  },
});
export const {
  setdragstore,
  setPersonName,
  setList,
  setWorkspaceInput,
  setstoreindex,
} = personSlice.actions;
export default personSlice.reducer;
