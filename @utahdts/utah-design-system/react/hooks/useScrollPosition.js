import { useEffect, useState } from 'react';

const useScrollPosition = (elementRef) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ele = elementRef || window;
  useEffect(
    () => {
      const updatePosition = () => {
        setScrollPosition(ele.scrollY);
      };
      ele.addEventListener('scroll', updatePosition);
      updatePosition();
      return () => ele.removeEventListener('scroll', updatePosition);
    },
    [ele]
  );

  return scrollPosition;
};

export default useScrollPosition;
