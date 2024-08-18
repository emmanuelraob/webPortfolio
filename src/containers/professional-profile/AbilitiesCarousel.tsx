import React, { useRef, useEffect } from 'react';

interface Ability {
  name: string;
  image: string;
}

interface AbilitiesCarouselProps {
  abilities: Ability[];
}

const AbilitiesCarousel: React.FC<AbilitiesCarouselProps> = ({ abilities }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const speed = 20; // Tiempo en milisegundos entre cada desplazamiento
  const step = 1; // Número de píxeles a desplazar

  const moveCarousel = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollLeft += step;

      // Si el scroll ha llegado al final de la primera copia, reestablecerlo al inicio
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }
    }
    setTimeout(moveCarousel, speed);
  };

  useEffect(() => {
    // Iniciar el desplazamiento automático
    const timeoutId = setTimeout(moveCarousel, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden flex items-center select-none w-full"
    >
      {abilities.concat(abilities).map((ability, index) => (
        <div
          key={index}
          className="flex-shrink-0  mx-[24px] flex flex-col items-center justify-center"
        >
          <img src={ability.image} alt={ability.name} className="h-14 w-14" />
          <p className="text-white mt-[16px] text-center">{ability.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AbilitiesCarousel;
