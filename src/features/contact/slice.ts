import { createSlice } from "@reduxjs/toolkit";
import { createContact } from "./asyncActions";

interface ContactState {
  isLoading: boolean;
  success: boolean;
  error: string | null;
  message: string | null;
}

const initialState: ContactState = {
  isLoading: false,
  success: false,
  error: null,
  message: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    clearContactState: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = null;
      state.message = null;
    },
    clearContactError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = null;
        state.message = null;
      })
      .addCase(createContact.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
        state.error = null;
        state.message = "¡Gracias por tu mensaje! Te contactaremos pronto.";
      })
      .addCase(createContact.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.payload as string;
        state.message = null;
      });
  },
});

export const { clearContactState, clearContactError } = contactSlice.actions;
export const selectorContact = (state: { contact: ContactState }) =>
  state.contact;
export const reducer = contactSlice.reducer;
