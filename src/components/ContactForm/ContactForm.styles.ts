import styled from "styled-components";
import { slideIn } from "@/utils/animations";

export const FormContainer = styled.div`
  padding: 3rem 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 600px;
  margin: 0 auto;
  animation: ${slideIn} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const FormTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--mui-palette-primary-main);
  margin-bottom: 0.75rem;
  text-align: center;
`;

export const FormSubtitle = styled.p`
  font-size: 1rem;
  color: var(--mui-palette-text-secondary);
  text-align: center;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #6d3014;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--mui-palette-secondary-main);
  border-radius: 8px;
  font-family: "Lora", serif;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--mui-palette-primary-main);
    box-shadow: 0 0 0 3px rgba(141, 73, 37, 0.1);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--mui-palette-secondary-main);
  border-radius: 8px;
  font-family: "Lora", serif;
  font-size: 1rem;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--mui-palette-primary-main);
    box-shadow: 0 0 0 3px rgba(141, 73, 37, 0.1);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const SubmitButton = styled.div`
  margin-top: 2rem;
`;

export const FormSuccess = styled.div`
  background-color: rgba(75, 181, 67, 0.1);
  color: #4bb543;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-weight: 500;
  text-align: center;
`;

export const FormError = styled.div`
  background-color: rgba(255, 76, 76, 0.1);
  color: #ff4c4c;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-weight: 500;
  text-align: center;
`;
