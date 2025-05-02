import { useState, FormEvent } from "react";
import Button from "@/components/UI/Button/Button";
import {
  FormContainer,
  FormTitle,
  FormSubtitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  FormSuccess,
  FormError,
} from "./ContactForm.styles";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Por favor completa todos los campos requeridos.",
      });
      return;
    }

    setFormStatus({
      submitted: true,
      success: true,
      message: "¡Gracias por tu mensaje! Te contactaremos pronto.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <FormContainer id="contact-form">
      <FormTitle>Contactanos</FormTitle>
      <FormSubtitle>
        ¿Tenés alguna pregunta o querés hacer una reserva? <br />
        Escribinos y te responderemos a la brevedad.
      </FormSubtitle>

      {formStatus.submitted &&
        (formStatus.success ? (
          <FormSuccess>{formStatus.message}</FormSuccess>
        ) : (
          <FormError>{formStatus.message}</FormError>
        ))}

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="name">Nombre *</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="email">Email *</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu correo electrónico"
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="phone">Teléfono *</FormLabel>
          <FormInput
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Tu número de teléfono"
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="message">Mensaje *</FormLabel>
          <FormTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Dejanos tu mensaje"
            rows={5}
            required
          />
        </FormGroup>

        <SubmitButton>
          <Button type="submit" variant="primary" fullWidth>
            Enviar Mensaje
          </Button>
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
