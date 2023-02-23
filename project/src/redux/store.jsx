import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = { ...action.payload, id: Date.now() };
      console.log(newContact);
      state.contact.push(newContact);
    },
    deleteContact: (state, action) => {
      state.contact = state.contact.filter(
        (contact) => contact.id !== action.payload
      );
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
