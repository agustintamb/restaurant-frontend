import { useEffect, RefObject } from "react";

/**
 * Este custom hook que detecta clics fuera de un determinado elemento
 * @param ref - Referencia al elemento que se debe vigilar
 * @param callback - Función a ejecutar cuando se detecta un clic fuera
 * @param excludedRefs - Referencias adicionales a elementos que deben excluirse del clic "fuera"
 */

const useOutsideClick = (
  ref: RefObject<HTMLElement | HTMLDivElement | null>,
  callback: () => void,
  excludedRefs: RefObject<HTMLElement | HTMLDivElement | null>[] = []
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verificar si el clic fue fuera del elemento referenciado
      const isOutside =
        ref.current && !ref.current.contains(event.target as Node);

      // Verificar si el clic no fue en ninguno de los elementos excluidos
      const notInExcluded = excludedRefs.every(
        (excludedRef) =>
          !excludedRef.current ||
          !excludedRef.current.contains(event.target as Node)
      );

      // Si el clic fue fuera del elemento y no fue en ningún elemento excluido, ejecutar el callback
      if (isOutside && notInExcluded) {
        callback();
      }
    };

    // Añadir listener
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar listener al desmontar
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, excludedRefs]);
};

export default useOutsideClick;
