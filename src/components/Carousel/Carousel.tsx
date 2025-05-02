import { useState, useEffect, useCallback, useRef } from "react";
import {
  CarouselContainer,
  CarouselSlide,
  CarouselDots,
  CarouselDot,
  CarouselArrow,
  CarouselContent,
  CarouselHeading,
  CarouselSubheading,
  CarouselOverlay,
} from "./Carousel.styles";

interface Slide {
  id: string;
  image: string;
  heading: string;
  subheading: string;
}

interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel = ({
  slides,
  autoPlay = true,
  interval = 5000,
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Limpia el intervalo actual
  const clearCurrentInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Inicia un nuevo intervalo
  const startInterval = useCallback(() => {
    if (autoPlay) {
      clearCurrentInterval(); // Limpia el intervalo actual
      intervalRef.current = setInterval(() => {
        setCurrentSlide((current) =>
          current === slides.length - 1 ? 0 : current + 1
        );
      }, interval);
    }
  }, [autoPlay, interval, slides.length]);

  // Pasa al siguiente slide y reinicia el intervalo
  const nextSlide = useCallback(() => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
    startInterval();
  }, [slides.length, startInterval]);

  // Pasa al slide anterior y reinicia el intervalo
  const prevSlide = useCallback(() => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
    startInterval(); // Reiniciar el intervalo
  }, [slides.length, startInterval]);

  // Pasa a un slide específico y reinicia el intervalo
  const goToSlide = useCallback(
    (index: number) => {
      setCurrentSlide(index);
      startInterval(); // Reiniciar el intervalo
    },
    [startInterval]
  );

  useEffect(() => {
    startInterval();
    return () => clearCurrentInterval();
  }, [startInterval]);

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <CarouselSlide
          key={slide.id}
          active={index === currentSlide}
          imageUrl={slide.image}
        >
          <CarouselOverlay />
          <CarouselContent>
            <CarouselHeading>{slide.heading}</CarouselHeading>
            <CarouselSubheading>{slide.subheading}</CarouselSubheading>
          </CarouselContent>
        </CarouselSlide>
      ))}

      <CarouselArrow position="left" onClick={prevSlide}>
        &#10094;
      </CarouselArrow>

      <CarouselArrow position="right" onClick={nextSlide}>
        &#10095;
      </CarouselArrow>

      <CarouselDots>
        {slides.map((slide, index) => (
          <CarouselDot
            key={slide.id}
            active={index === currentSlide}
            onClick={() => goToSlide(index)}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

export default Carousel;
