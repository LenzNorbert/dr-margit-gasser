import { useEffect, useRef } from 'react';
import { useUtilities } from '~/services';

export const MouseIndicator = () => {
  const indicatorReference = useRef<HTMLDivElement>(null);
  const { detectMobile } = useUtilities();

  useEffect(() => {
    if (!indicatorReference.current) return;
    if (detectMobile(navigator)) {
      indicatorReference.current.style.display = 'none';
      return;
    }

    document.body.onpointermove = ({ pageX, pageY }) =>
      indicatorReference.current?.animate({ left: `${pageX - 16}px`, top: `${pageY - 16}px` }, { duration: 500, fill: 'forwards' });

    document.body.onclick = () =>
      indicatorReference.current?.animate(
        {
          transform: ['scale(1)', 'scale(0.3)', 'scale(1)'],
        },
        {
          duration: 333,
          easing: 'ease-in-out',
          fill: 'both',
        }
      );
  }, [indicatorReference]);

  return (
    <>
      <div
        className="animation-rotating pointer-events-none absolute left-1/2 top-1/2 z-50 hidden h-8 w-8 rounded-full border-2 border-cpText md:block"
        ref={indicatorReference}
      />
    </>
  );
};
