import { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styles";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  onClick,
  type = "button",
  disabled = false,
  className,
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
