import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import faqData from "@/mocks/faqData.json";
import carouselData from "@/mocks/carouselData.json";
import Carousel from "@/components/UI/Carousel/Carousel";
import ContactForm from "@/components/ContactForm/ContactForm";
import FAQ from "@/components/FAQ/FAQ";
import Button from "@/components/UI/Button/Button";
import {
  HomeContainer,
  HomeSection,
  AboutContainer,
  AboutContent,
  AboutImage,
  AboutText,
  AboutHeading,
  CTASection,
  CTAContent,
  CTAHeading,
  CTAText,
  CTAButtons,
  ContactSection,
  FAQSection,
} from "./Home.styles";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    if (mainContent) mainContent.classList.add("fade-in");
    return () => {
      if (mainContent) mainContent.classList.remove("fade-in");
    };
  }, []);

  return (
    <HomeContainer>
      <div id="inicio">
        <Carousel slides={carouselData.slides} />
      </div>

      <HomeSection id="nosotros">
        <AboutContainer>
          <AboutImage>
            <img src="/images/place2.jpg" alt="Nuestro Bodegón" />
          </AboutImage>
          <AboutContent>
            <AboutHeading>Nuestra Historia</AboutHeading>
            <AboutText>
              Desde 1978, Bodegón Argentino ha sido un emblema de la gastronomía
              porteña, manteniendo vivas las recetas tradicionales que
              caracterizan nuestra identidad culinaria.
            </AboutText>
            <AboutText>
              Lo que comenzó como un pequeño emprendimiento familiar, se ha
              convertido en un punto de encuentro para quienes buscan
              experimentar la auténtica cocina argentina en un ambiente acogedor
              y familiar.
            </AboutText>
            <AboutText>
              Cada plato que servimos es elaborado con ingredientes frescos y de
              primera calidad, siguiendo las recetas heredadas de generación en
              generación. Nuestro objetivo es que cada bocado te transporte a
              los sabores de ayer, con la calidad de hoy.
            </AboutText>
          </AboutContent>
        </AboutContainer>
      </HomeSection>

      <CTASection id="menu-cta">
        <CTAContent>
          <CTAHeading>Descubre Nuestra Carta</CTAHeading>
          <CTAText>
            Explora nuestra amplia selección de platos tradicionales argentinos,
            desde las mejores carnes hasta los postres más deliciosos.
          </CTAText>
          <CTAButtons>
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate("/menu")}
            >
              Ver Menú Completo
            </Button>
            <Button
              variant="secondary"
              size="large"
              onClick={() => {
                const contactForm = document.getElementById("contact-form");
                if (contactForm) {
                  const yOffset = -24;
                  const yPosition =
                    contactForm.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: yPosition, behavior: "smooth" });
                }
              }}
            >
              Hacer Reserva
            </Button>
          </CTAButtons>
        </CTAContent>
      </CTASection>

      <FAQSection id="preguntas">
        <FAQ questions={faqData.faqs} />
      </FAQSection>

      <ContactSection id="contact-form">
        <ContactForm />
      </ContactSection>
    </HomeContainer>
  );
};

export default Home;
