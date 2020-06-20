import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setBackgroundClass } from 'app/store/slices/appSlice';

export function useScrollForBackground(backgroundClass: string) {
  const divRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const scroll = function () {
      const { scrollY } = window;
      const { offsetTop = 0, offsetHeight = 0 } = divRef.current || {};

      if (
        scrollY >= offsetTop - offsetHeight / 2 &&
        scrollY < offsetTop + offsetHeight / 2
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
