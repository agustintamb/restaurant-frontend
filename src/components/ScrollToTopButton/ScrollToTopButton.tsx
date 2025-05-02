import { useState, useEffect } from "react";
import { ScrollButton } from "./ScrollToTopButton.styles";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Monitorear el scroll para mostrar/ocultar el botón
  useEffect(() => {
    // Mostrar el botón cuando se pasa el umbral de scroll (300px)
    const toggleVisibility = () => setVisible(window.scrollY > 300);

    // Agregar event listener
    window.addEventListener("scroll", toggleVisibility);

    // Limpiar event listener al desmontar
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Función para hacer scroll hacia arriba
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <ScrollButton
      visible={visible}
      onClick={scrollToTop}
      aria-label="Ir hacia arriba"
    >
      ↑
    </ScrollButton>
  );
};

export default ScrollToTopButton;
