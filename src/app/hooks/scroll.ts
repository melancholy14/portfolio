import { useEffect, useRef } from 'react';

import { useAppDispatch } from 'app/store';
import { setBackgroundClass } from 'app/store/slices/appSlice';

export function useScrollForBackground(backgroundClass: string) {
  const divRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const scroll = function () {
      const { scrollY } = window;
      const { offsetTop = 0, offsetHeight = 0 } = divRef.current || {};

      if (
        scrollY >= offsetTop - offsetHeight &&
        scrollY < offsetTop + offsetHeight / 3
      ) {
        dispatch(setBackgroundClass(backgroundClass));
      }
    };

    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, [dispatch, backgroundClass]);

  return { divRef };
}
