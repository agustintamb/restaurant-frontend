import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterSection,
  FooterTitle,
  FooterText,
  SocialIcons,
  SocialIcon,
  Copyright,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Contacto</FooterTitle>
          <FooterText>
            <strong>Dirección:</strong> <br /> Av. Corrientes 1234, CABA
          </FooterText>
          <FooterText>
            <strong>Teléfono:</strong> <br /> (011) 4123-4567
          </FooterText>
          <FooterText>
            <strong>Email:</strong> <br /> info@bodegonargentino.com
          </FooterText>
        </FooterSection>
        <FooterSection>
          <FooterLogo>
            <FooterTitle>Seguinos</FooterTitle>
            <SocialIcons>
              <SocialIcon>
                <i className="fab fa-instagram"></i>
              </SocialIcon>
              <SocialIcon>
                <i className="fab fa-facebook-f"></i>
              </SocialIcon>
              <SocialIcon>
                <i className="fab fa-twitter"></i>
              </SocialIcon>
            </SocialIcons>
          </FooterLogo>
          <FooterText>
            Tradición argentina, sabores auténticos y momentos inolvidables.
          </FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Horarios</FooterTitle>
          <FooterText>
            <strong>Lunes a Jueves:</strong> <br /> 12:00 - 15:00, 20:00 - 00:00
          </FooterText>
          <FooterText>
            <strong>Viernes y Sábados:</strong> <br /> 12:00 - 15:00, 20:00 -
            01:00
          </FooterText>
          <FooterText>
            <strong>Domingos:</strong> <br /> 12:00 - 16:00, 20:00 - 00:00
          </FooterText>
        </FooterSection>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} Bodegón Argentino. Todos los derechos
        reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
