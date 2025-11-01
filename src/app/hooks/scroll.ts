import { useEffect, useRef } from 'react';

import { useAppStore } from 'app/store';

export function useScrollForBackground(backgroundClass: string) {
  const divRef = useRef<HTMLDivElement>(null);

  const setBackgroundClass = useAppStore((state) => state.setBackgroundClass);

  useEffect(() => {
    const scroll = function () {
      const { scrollY } = window;
      const { offsetTop = 0, offsetHeight = 0 } = divRef.current || {};

      if (
        scrollY >= offsetTop - offsetHeight &&
        scrollY < offsetTop + offsetHeight / 3
      ) {
        setBackgroundClass(backgroundClass);
      }
    };

    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, [setBackgroundClass, backgroundClass]);

  return { divRef };
}
