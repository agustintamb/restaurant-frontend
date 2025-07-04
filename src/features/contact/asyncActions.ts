import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "@/utils/isAxiosError";
import { IContactForm } from "@/types";
import ContactService from "@/service/contact";

export const createContact = createAsyncThunk(
  "contact/createContact",
  async (contactData: IContactForm, { rejectWithValue }) => {
    try {
      const { data } = await ContactService.createContact(contactData);
      return data.result;
    } catch (error) {
      if (isAxiosError(error)) return rejectWithValue(error.response?.data);
      return rejectWithValue("Error al enviar el mensaje");
    }
  }
);
