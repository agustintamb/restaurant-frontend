import { useContactForm } from "./useContactForm";
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
  const {
    formData,
    isLoading,
    success,
    error,
    message,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <FormContainer id="contact-form">
      <FormTitle>Contactanos</FormTitle>
      <FormSubtitle>
        ¿Tenés alguna pregunta o querés hacer una reserva? <br />
        Escribinos y te responderemos a la brevedad.
      </FormSubtitle>

      {success && message && <FormSuccess>{message}</FormSuccess>}
      {error && <FormError>{error}</FormError>}

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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
          />
        </FormGroup>

        <SubmitButton>
          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Enviar Mensaje"}
          </Button>
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
