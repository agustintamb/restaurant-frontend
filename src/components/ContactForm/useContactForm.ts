import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/app/store";
import { IContactForm } from "@/types";
import { createContact } from "@/features/contact/asyncActions";
import {
  selectorContact,
  clearContactState,
  clearContactError,
} from "@/features/contact/slice";

export const useContactForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isLoading, success, error, message } =
    useAppSelector(selectorContact);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    )
      return;
    await submitContact(formData);
  };

  const submitContact = (contactData: IContactForm) =>
    dispatch(createContact(contactData));

  const clearState = () => dispatch(clearContactState());
  const clearError = () => dispatch(clearContactError());

  useEffect(() => {
    if (success)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    setTimeout(() => clearState(), 5000);
  }, [success]);

  return {
    isLoading,
    success,
    error,
    message,
    formData,
    handleChange,
    handleSubmit,
    submitContact,
    clearState,
    clearError,
  };
};
