import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

let contacts = localStorage.getItem("contacts");
if (contacts) {
  contacts = JSON.parse(contacts);
} else {
  contacts = [];
}

const initialState = {
  contact: contacts,
  deletingId: undefined,
  editingId: undefined,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = { ...action.payload, id: Date.now() };
      state.contact.push(newContact);
      localStorage.setItem("contacts", JSON.stringify(state.contact));
    },
    deleteContact: (state, action) => {
      state.contact = state.contact.filter(
        (contact) => contact.id !== action.payload
      );
      state.deletingId = undefined;
      localStorage.setItem("contacts", JSON.stringify(state.contact));
    },
    showModal: (state, action) => {
      state.deletingId = action.payload;
    },
    editedId: (state, action) => {
      state.editingId = action.payload;
    },
    editingMode: (state, action) => {
      const editIndex = state.contact.findIndex(
        (item) => item.id === action.payload.id
      );
      const copyContact = [...state.contact];
      copyContact.splice(editIndex, 1, action.payload);
      state.contact = copyContact;
      localStorage.setItem("contacts", JSON.stringify(state.contact));
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
