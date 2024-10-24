import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "projectId",
  initialState: { id: "", activePage: "" },
  reducers: {
    assignId: (state, action) => {
      state.id = action.payload;
    },
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { assignId, setActivePage } = projectSlice.actions;

export default projectSlice.reducer;
