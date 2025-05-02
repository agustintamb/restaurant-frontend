import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useOutsideClick from "@/hooks/useOutsideClick";
import {
  HeaderContainer,
  Logo,
  NavLinks,
  NavLink,
  MobileMenuButton,
  MobileMenu,
} from "./Header.styles";

// Interfaz para las secciones de la página
interface Section {
  id: string;
  name: string;
  path: string; // Ruta principal donde se encuentra la sección
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Referencias para el hook de clic fuera
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLDivElement>(null);

  // Definir las secciones disponibles en el Home
  const sections: Section[] = [
    { id: "inicio", name: "Inicio", path: "/" },
    { id: "nosotros", name: "Nosotros", path: "/" },
    { id: "preguntas", name: "FAQ", path: "/" },
    { id: "contact-form", name: "Contacto", path: "/" },
    { id: "menu", name: "MENU", path: "/menu" },
  ];

  // Uso del hook useOutsideClick
  useOutsideClick(
    mobileMenuRef,
    () => {
      if (mobileMenuOpen) setMobileMenuOpen(false);
    },
    [mobileMenuButtonRef] // Excluimos el botón para que el clic en él no cierre el menú
  );

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Función para navegar a una sección
  const scrollToSection = (sectionId: string, path: string) => {
    // Primero, navegar a la ruta correcta si no estamos en ella
    if (location.pathname !== path) {
      navigate(path);
      // Usamos setTimeout para dar tiempo a que la página se cargue
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          // Scroll a la sección con un pequeño offset para que el header no la tape
          const headerHeight = 80; // altura aproximada del header
          const sectionTop = section.getBoundingClientRect().top;
          const offsetPosition = sectionTop + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 300);
    } else {
      // Si ya estamos en la ruta correcta, solo hacemos scroll
      const section = document.getElementById(sectionId);
      if (section) {
        // Scroll a la sección con un pequeño offset para que el header no la tape
        const headerHeight = 80; // altura aproximada del header
        const sectionTop = section.getBoundingClientRect().top;
        const offsetPosition = sectionTop + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    // Cerrar el menú móvil
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.includes(path);
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo onClick={() => scrollToSection("inicio", "/")}>
        <img src="src/assets/logo.png" alt="Bodegón Argentino" />
      </Logo>

      <NavLinks>
        {sections.map((section) => (
          <NavLink
            key={section.id}
            active={
              section.path === "/menu"
                ? isActive("/menu")
                : location.pathname === "/" &&
                  section.id === location.hash.replace("#", "")
            }
            onClick={() => scrollToSection(section.id, section.path)}
          >
            {section.name}
          </NavLink>
        ))}
      </NavLinks>

      <MobileMenuButton
        ref={mobileMenuButtonRef}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </MobileMenuButton>

      <MobileMenu ref={mobileMenuRef} open={mobileMenuOpen}>
        {sections.map((section) => (
          <NavLink
            key={section.id}
            active={
              section.path === "/menu"
                ? isActive("/menu")
                : location.pathname === "/" &&
                  section.id === location.hash.replace("#", "")
            }
            onClick={() => scrollToSection(section.id, section.path)}
          >
            {section.name}
          </NavLink>
        ))}
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
