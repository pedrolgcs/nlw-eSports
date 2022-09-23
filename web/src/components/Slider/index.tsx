import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

type SliderProps = {
  children: React.ReactNode;
};

function Slider({ children }: SliderProps) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      rtl: true,
      slides: {
        perView: 6,
        spacing: 20,
        origin: 'center',
      },
    },
    []
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      {React.Children.map(children, (child) => (
        <div className="keen-slider__slide">{child}</div>
      ))}
    </div>
  );
}

export default Slider;
