import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: {},
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contact = action.payload;
    },
  },
});

export const contactSliceActions = contactSlice.actions;

const store = configureStore({
  reducer: {
    contact: contactSlice.reducer,
  },
});

export default store;
