import React, { useEffect, useState } from 'react';

import Container from 'app/layouts/Container';
import { useScrollForBackground } from 'app/hooks/scroll';

import { MdCardTravel } from 'react-icons/md';
import { DiCoffeescript } from 'react-icons/di';
import { FaBeer } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { FiArrowDown } from 'react-icons/fi';

import 'animate.css';

const favourites = [
  {
    text: 'Coffee',
    Icon: DiCoffeescript,
  },
  {
    text: 'Beer',
    Icon: FaBeer,
  },
  {
    text: 'Travel',
    Icon: MdCardTravel,
  },
  {
    text: 'Solving Problems',
    Icon: MdComputer,
  },
];

function Main() {
  const [flipIndex, setFlipIndex] = useState<number>(-1);
  const [patternClass, setPatternClass] = useState<string>('pattern-dots-lg');

  const { divRef } = useScrollForBackground('bg-blue-900');

  useEffect(() => {
    const intervalFlip = setInterval(() => {
      setFlipIndex((prev) => {
        if (prev === favourites.length - 1) {
          clearInterval(intervalFlip);
          return prev;
        }

        return prev + 1;
      });
    }, 1200);

    return () => {
      clearInterval(intervalFlip);
    };
  }, []);

  useEffect(() => {
    const largeScreenWidth = 1440;

    const handleResize = () => {
      if (window.innerWidth >= largeScreenWidth) {
        setPatternClass('pattern-dots-xl');
      } else {
        setPatternClass('pattern-dots-lg');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isLast = (index: number) => index === favourites.length - 1;

  return (
    <Container className="h-screen m-auto">
      <div
        className="relative font-sriracha lg:text-4xl text-2xl flex h-full"
        ref={divRef}
      >
        <div className="w-full">
          <div
            className={`w-1/2 lg:w-1/3 lg:h-1/2 lg:ml-1/4 mt-1/3 lg:mt-4/33 ${patternClass} text-orange-600 uppercase`}
          >
            <div className="text-white ml-2/5 md:ml-3/5 pt-1/3 w-7/4 md:w-33/20">
              <span className="font-bold text-4xl md:text-5xl lg:text-6xl">
                Misol Goh
              </span>
              <br />
              <span className="text-yellow-500 font-semibold text-3xl md:text-4xl lg:text-5xl">
                Software Developer
              </span>
              <br />
              <span>loves</span>
              <div className="h-15 text-2xl md:text-3xl lg:text-4xl">
                {favourites.map(({ text, Icon }, index) => (
                  <div
                    key={text}
                    className={`flex items-center ${
                      index === flipIndex
                        ? 'block animate__animated animate__flipInX'
                        : 'hidden'
                    } ${isLast(index) ? 'text-red-300' : ''}`}
                  >
                    <span className="mr-1 lg:mr-3">{text}</span>
                    <Icon />
                  </div>
                ))}
              </div>
              <div className="text-2xl py-4 h-17">
                {isLast(flipIndex) && (
                  <div className="flex items-center flex-col md:flex-row animate__animated animate__zoomIn">
                    <span className="mr-3">Wanna know more?</span>
                    <span className="mr-3 font-extrabold">Scroll Down</span>
                    <FiArrowDown />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Main;
